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

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {
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
  constructor(private router: Router, private dataService: DataService, private modalService: BsModalService) { }

  ngOnInit() {
    this.selectedMethod = this.dataService.getSelectedMethod();
    this.serviceModel = this.dataService.getServiceModel();

    if (this.serviceModel === undefined) {
      // TODO this must be forwarded to service list.
    }

    if (this.selectedMethod === undefined) {
      this.router.navigateByUrl('service');
    }
    console.log('this is the method ' + this.selectedMethod);
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
  }

  ////// UTILITIES
  onSelectRandom(data: TabDirective) {
    this.isRandom = true;
  }

  onSelectCustom(data: TabDirective) {
    this.isRandom = false;
  }
}
