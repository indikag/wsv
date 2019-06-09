import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ServiceModel } from './service-model-class/service-model.model';
import { Parameter } from './service-model-class/parameter.model';
import { ServiceMethods } from './service-model-class/service-methods.model';
import { BsModalService, BsModalRef, ModalDirective, TabDirective } from 'ngx-bootstrap';
import { Response } from './service-model-class/response.model';
import { SimpleDataFormat } from './service-model-class/simple-data-format.model';
import { ComplexDataFormat } from './service-model-class/complex-data-format.model';
import { Format } from './service-model-class/format.model';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { UserServicesService } from '../services/user-services.service';
import { WsCallback } from '../services/util/ws-callback';
import { WsResponse } from '../services/util/ws-response.model';
import { WsType } from '../services/util/ws-type';
import { AlertService } from '../util/alert/alert.service';

@Component({
  selector: 'app-service-define',
  templateUrl: './service-define.component.html',
  styleUrls: ['./service-define.component.css']
})
export class ServiceDefineComponent implements OnInit, WsCallback {
  @ViewChild('changeMethodModal') changeMethodModal: ModalDirective;
  @ViewChild('methodModal') childModal: ModalDirective;
  @ViewChild('parameterModal') parameterModal: ModalDirective;
  @ViewChild('responseModal') responseModal: ModalDirective;
  @ViewChild('formatModal') formatModal: ModalDirective;

  @ViewChild('simpleFormatModal') simpleFormatModal: ModalDirective;
  @ViewChild('complexFormatModal') complexFormatModal: ModalDirective;

  // Parent service model
  public serviceModel: ServiceModel = new ServiceModel();
  // Service methods of the parent model
  public serviceMethods: ServiceMethods[] = [];
  // Current service method
  public currentMethod: ServiceMethods = new ServiceMethods();
  // Parameter list
  public parameterList: Parameter[] = [];
  // Current parameter
  public currentParameter: Parameter = new Parameter();
  // Response model
  public currentResponse: Response;
  // simple format model
  public currentSimpleFormat: SimpleDataFormat = new SimpleDataFormat();
  // complex data format
  public currentComplexFormat: ComplexDataFormat = new ComplexDataFormat();
  // current format model
  public currentFormat: Format;
  // current format model list
  public currentFormatList: Format[] = [];

  public currentComplexDataFormat: ComplexDataFormat;
  public currentSimpleDataFormat: SimpleDataFormat;

  // Common variables for the class
  private modalRef: BsModalRef;

  // utility variables
  public isRandom = true;

  /////// EDIT SERVICE RELATED PARAMETERS ///
  public serviceId;

  constructor(private modalService: BsModalService, private router: Router, private dataService: DataService,
    private route: ActivatedRoute, private servicesService: UserServicesService, private alertService: AlertService) {
    // Assigning initial empty method list
    this.serviceModel.serviceMethods = this.serviceMethods;
  }

  ngOnInit() {
    // this.setInitialValues();
    if (this.route.snapshot.queryParams.sId !== undefined) {
      this.serviceId = this.route.snapshot.queryParams.sId;
      this.servicesService.getServiceByServiceId(this.serviceId, this);
    } else {
      // new service
    }
  }

  // for testing purposes (initial data loading part)
  setInitialValues() {
    const service = new ServiceModel();
    service.serviceName = 'User Profile Service';
    service.serviceDescription = 'Get user profile information';

    const method1 = new ServiceMethods();
    const methodList: ServiceMethods[] = [];
    const paramList: Parameter[] = [];

    method1.methodName = 'getUserInformation';
    method1.type = 'POST';
    method1.parameters = paramList;
    methodList.push(method1);
    service.serviceMethods = methodList;

    const param = new Parameter();
    param.parameterName = 'userId';
    param.parameterType = 'String';
    param.parameterValue = '3222-244-111';
    paramList.push(param);

    const res = new Response();
    res.maxSize = 3;
    res.minSize = 1;
    res.name = 'Profile';
    res.responseType = 'Modal';
    method1.response = res;

    this.serviceModel = service;
    this.currentMethod = method1;
    this.currentParameter = param;
    this.parameterList = paramList;
    this.serviceMethods = methodList;
    this.currentResponse = res;
  }

  // Show edit method page
  public editMethod(serviceMethod: ServiceMethods) {
    // const data: NavigationExtras = {selectedMethod: this.currentMethod};
    // this.router.navigate(['method'], {state: data);
    /*const navigationExtras: NavigationExtras = {
      queryParams: {
        selectedMethod: this.currentMethod
      }
    };*/
    this.dataService.setServiceModel(this.serviceModel);
    this.dataService.setSelectedMethod(serviceMethod);
    console.log(this.currentMethod);
    this.router.navigateByUrl('method');
  }

  public addMethod(template: TemplateRef<any>) {
    this.currentMethod = new ServiceMethods();
    this.childModal.show();
  }

  public doAddMethod() {
    this.serviceMethods.push(this.currentMethod);
    // this.currentMethod = null;
    this.childModal.hide();
  }

  public onSaveButtonClick() {
    console.log('save the service');
    // serviceId serviceName serviceUrl jsonFile published;
    // {"serviceId":"","jsonFile":"","serviceName":"","serviceUrl":"","published":""}
    if (this.serviceId === '' || this.serviceId === undefined) {
      const data = {
        'serviceId': '',
        'jsonFile': JSON.stringify(this.serviceModel),
        'serviceName': this.serviceModel.serviceName,
        'serviceUrl': '', 'published': false
      };
      this.servicesService.addService(data, '1-g', this);
    } else {
      // update the service
    }
  }

  onSuccess(data: WsResponse, serviceType: WsType) {
    if (serviceType === WsType.GET_SERVICE_BY_SERVICE_ID) {
      this.serviceId = data.payload.serviceId;
      const jsonFile_ = JSON.parse(data.payload.jsonFile);
      this.serviceModel = this.processJsonFile(jsonFile_);
      this.serviceMethods = this.serviceModel.serviceMethods;
      console.log(this.serviceModel);
    } else if (serviceType === WsType.ADD_SERVICE) {
      this.alertService.success('Successfully added the service', false);
    } else if (serviceType === WsType.UPDATE_SERVICE) {
      this.alertService.success('Service update success');
      this.servicesService.getServiceByServiceId(this.serviceId, this);
    }
  }

  onFail(data: WsResponse, serviceType: WsType) {
    if (serviceType === WsType.GET_SERVICE_BY_SERVICE_ID) {
      console.log(data);
    } else if (serviceType === WsType.ADD_SERVICE) {
      this.alertService.error('Error, could not add the service', false);
    } else if (serviceType === WsType.UPDATE_SERVICE) {
      this.alertService.error('Error, could not update the service', false);
    }
  }

  public onUpdateButtonClick() {
    const data = {
      'serviceId': this.serviceId,
      'jsonFile': JSON.stringify(this.serviceModel),
      'serviceName': this.serviceModel.serviceName,
      'serviceUrl': '', 'published': false
    };
    this.servicesService.updateService(data, this);
  }

  public changeMethodNameType(serviceMethod: ServiceMethods) {
    console.log(serviceMethod);
    this.currentMethod = serviceMethod;
    this.changeMethodModal.show();
  }

  public deleteMethod(serviceMethod: ServiceMethods) {
    console.log('delete the method');
    const index = this.serviceModel.serviceMethods.indexOf(serviceMethod);
    if (index !== -1) {
      this.serviceModel.serviceMethods.splice(index, 1);
    }

    const data = {
      'serviceId': this.serviceId,
      'jsonFile': JSON.stringify(this.serviceModel),
      'serviceName': this.serviceModel.serviceName,
      'serviceUrl': '', 'published': false
    };
    this.servicesService.updateService(data, this);
  }

  private processJsonFile(file: any): ServiceModel {
    if (file == null || file === undefined) {
      console.error('File cannot be null or undefined');
    }
    // Initialize the service model
    const sModel = new ServiceModel();
    sModel.serviceDescription = file.serviceDescription;
    sModel.serviceName = file.serviceName;
    sModel.serviceId = this.serviceId;

    // Initialize methods
    const serviceMethods: ServiceMethods[] = [];
    file.serviceMethods.forEach(method => {
      const m = new ServiceMethods();
      m.methodName = method.methodName;
      m.parameters = method.parameters;
      m.type = method.type;

      const res = new Response();
      res.minSize = 0;
      res.maxSize = method.response.maxSize;
      res.name = method.response.name;
      res.responseType = method.response.responseType;
      res.format = null; // TODO  this values is not set yet.

      m.response = res;
      serviceMethods.push(m);
    });
    sModel.serviceMethods = serviceMethods;

    return sModel;
  }
}
