import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ServiceModel } from './service-model-class/service-model.model';
import { Parameter } from './service-model-class/parameter.model';
import { ServiceMethods } from './service-model-class/service-methods.model';
import { BsModalService, BsModalRef, ModalDirective, TabDirective } from 'ngx-bootstrap';
import { Response } from './service-model-class/response.model';
import { SimpleDataFormat } from './service-model-class/simple-data-format.model';
import { ComplexDataFormat } from './service-model-class/complex-data-format.model';
import { Format } from './service-model-class/format.model';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-define',
  templateUrl: './service-define.component.html',
  styleUrls: ['./service-define.component.css']
})
export class ServiceDefineComponent implements OnInit {
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


  constructor(private modalService: BsModalService, private router: Router, private dataService: DataService) {
    // Assigning initial empty method list
    this.serviceModel.serviceMethods = this.serviceMethods;
  }

  ngOnInit() {
    // this.setInitialValues();
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
  public editMethod() {
    // const data: NavigationExtras = {selectedMethod: this.currentMethod};
    // this.router.navigate(['method'], {state: data);
    /*const navigationExtras: NavigationExtras = {
      queryParams: {
        selectedMethod: this.currentMethod
      }
    };*/
    this.dataService.setServiceModel(this.serviceModel);
    this.dataService.setSelectedMethod(this.currentMethod);
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
}
