import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceMethods } from 'src/app/service-define/service-model-class/service-methods.model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Response } from 'src/app/service-define/service-model-class/response.model';
import { Parameter } from 'src/app/service-define/service-model-class/parameter.model';
import { SimpleDataFormat } from 'src/app/service-define/service-model-class/simple-data-format.model';
import { ComplexDataFormat } from 'src/app/service-define/service-model-class/complex-data-format.model';
import { Format } from 'src/app/service-define/service-model-class/format.model';
import { BsModalRef, BsModalService, ModalDirective, TabDirective } from 'ngx-bootstrap';
import { ServiceModel } from 'src/app/service-define/service-model-class/service-model.model';
import { WsCallback } from '../util/ws-callback';
import { WsResponse } from '../util/ws-response.model';
import { WsType } from '../util/ws-type';
import { AlertService } from 'src/app/util/alert/alert.service';
import { UserService } from '../user.service';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit, WsCallback {
  @ViewChild('methodModal') childModal: ModalDirective;
  @ViewChild('parameterModal') parameterModal: ModalDirective;
  @ViewChild('responseModal') responseModal: ModalDirective;
  @ViewChild('formatModal') formatModal: ModalDirective;

  @ViewChild('simpleFormatModal') simpleFormatModal: ModalDirective;
  @ViewChild('complexFormatModal') complexFormatModal: ModalDirective;

  // Parent service model
  public serviceModel: ServiceModel;
  public selectedMethod: ServiceMethods;

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
  constructor(private router: Router, private dataService: DataService,
     private modalService: BsModalService, private alertService: AlertService,
     private userService: UserServicesService, private servicesService: UserServicesService) { }

  ngOnInit() {
    this.selectedMethod = this.dataService.getSelectedMethod();
    this.serviceModel = this.dataService.getServiceModel();

    if (this.serviceModel === undefined) {
      // TODO this must be forwarded to service list.
    }

    if (this.selectedMethod === undefined) {
      this.router.navigateByUrl('home');
    }

    this.loadInitialData();

    console.log('this is the method ' + this.selectedMethod);
  }

  loadInitialData() {
    if (this.serviceModel !== undefined) {
      this.parameterList = this.selectedMethod.parameters;
      this.currentResponse = this.selectedMethod.response;
    } else {
      this.alertService.error('Service Model cannot be null');
    }
  }

   // Parameters
   addParameter() {
    this.selectedMethod.parameters = this.parameterList;
    this.parameterModal.show();
  }

  doAddParameter() {
    this.parameterList.push(this.currentParameter);
    // this.currentParameter = new Parameter();
    this.parameterModal.hide();
  }

  // Response
  addResponse() {
    this.currentResponse = new Response();
    this.selectedMethod.response = this.currentResponse;
    this.responseModal.show();
  }

  doAddResponse() {
    // this.currentResponse = null;
    this.responseModal.hide();
  }

  deleteResponse() {
    this.selectedMethod.response = null;
    this.currentResponse = null;
  }

  changeResponseType(param: any) {
    console.log(param.target.value);
  }

  doAddResponseAttributes() {
    // adding attributes
  }

  /**
   * ADDING ATTRIBUTES TO THE RESPONSE
   */
  addAttribute() {
    this.currentFormat = new Format();
    this.formatModal.show();
    this.currentResponse.format = this.currentFormatList;
  }

  addFormat() {
    if (this.currentFormat.type === 'Model') {
      this.currentFormat.complexDataFormat = new ComplexDataFormat();
      this.currentFormat.simpleDataFormat = null;
    } else {
      this.currentFormat.complexDataFormat = null;
      this.currentFormat.simpleDataFormat = new SimpleDataFormat();
    }
    this.currentFormatList.push(this.currentFormat);
    // this.currentFormat = null;
    this.formatModal.hide();
  }

  addComplexModel() {
    this.complexFormatModal.show();
  }

  addSimpleModel(format: Format) {
    this.currentSimpleFormat = new SimpleDataFormat();
    this.simpleFormatModal.show();
    this.currentSimpleDataFormat = format;
  }

  addValueTypeValue(value: any) {
    console.log('adding item');
    this.currentFormat.simpleDataFormat = this.currentSimpleDataFormat;
  }


  onSaveButtonClick() {
    const newLocal = JSON.stringify(this.serviceModel);
    console.log(newLocal);
    if (newLocal !== undefined && newLocal.trim() !== '') {
      // do the save
      // this.userService.addService(newLocal, '1-g', this);
      if (this.serviceModel.serviceId !== undefined || this.serviceModel.serviceId !== '') {
        // update the existing service
        const data = {
          'serviceId': this.serviceModel.serviceId,
          'jsonFile': JSON.stringify(this.serviceModel),
          'serviceName': this.serviceModel.serviceName,
          'serviceUrl': '', 'published': false
        };
        this.servicesService.updateService(data, this);
      }

    } else {
      // show the error message
      this.alertService.error('Cannot save empty data');
    }
  }

  ////// UTILITIES
  onSelectRandom(data: TabDirective) {
    this.isRandom = true;
  }

  onSelectCustom(data: TabDirective) {
    this.isRandom = false;
  }

  onSuccess(data: WsResponse, serviceType: WsType) {
    if (serviceType === WsType.ADD_SERVICE) {
      this.alertService.success(data.statusDescription, false);
      this.router.navigateByUrl('home');
    } else if (serviceType === WsType.GET_SERVICE_BY_SERVICE_ID) {
      this.alertService.error(data.statusDescription, false);
    }
  }
  onFail(data: WsResponse, serviceType: WsType) {
    if (serviceType === WsType.ADD_SERVICE) {
      this.alertService.error(data.statusDescription, false);
    } else if (serviceType === WsType.GET_SERVICE_BY_SERVICE_ID) {
      this.alertService.error(data.statusDescription, false);
    }
  }
}
