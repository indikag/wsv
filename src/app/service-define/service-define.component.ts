import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ServiceModel } from './service-model-class/service-model.model';
import { Parameter } from './service-model-class/parameter.model';
import { ServiceMethods } from './service-model-class/service-methods.model';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap';
import { Response } from './service-model-class/response.model';
import { SimpleDataFormat } from './service-model-class/simple-data-format.model';

@Component({
  selector: 'app-service-define',
  templateUrl: './service-define.component.html',
  styleUrls: ['./service-define.component.css']
})
export class ServiceDefineComponent implements OnInit {
  @ViewChild('methodModal') childModal: ModalDirective;
  @ViewChild('parameterModal') parameterModal: ModalDirective;
  @ViewChild('responseModal') responseModal: ModalDirective;

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


  // Common variables for the class
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    // Assigning initial empty method list
    this.serviceModel.serviceMethods = this.serviceMethods;
  }

  ngOnInit() {
     this.setInitialValues();
  }

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
    res.responseType = 'String';
    method1.response = res;

    this.serviceModel = service;
    this.currentMethod = method1;
    this.currentParameter = param;
    this.parameterList = paramList;
    this.serviceMethods = methodList;
    this.currentResponse = res;
  }

  onSaveButtonClick() {
    const newLocal = JSON.stringify(this.serviceModel);
    console.log(newLocal);
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

  // Parameters
  addParameter() {
    this.currentMethod.parameters = this.parameterList;
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
    this.currentMethod.response = this.currentResponse;
    this.responseModal.show();
  }

  doAddResponse() {
    // this.currentResponse = null;
    this.responseModal.hide();
  }

  deleteResponse() {
    this.currentMethod.response = null;
    this.currentResponse = null;
  }

  changeResponseType(param: any) {
    console.log(param.target.value);
  }

  doAddResponseAttributes() {
    // adding attributes
  }

}
