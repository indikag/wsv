import { Injectable } from '@angular/core';
import { ServiceMethods } from './service-define/service-model-class/service-methods.model';
import { ServiceModel } from './service-define/service-model-class/service-model.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // This is the selected method in the add service page.
  private selectedMethod?: ServiceMethods;
  // Current service model
  public serviceModel: ServiceModel;

  constructor() { }

  setSelectedMethod(method: ServiceMethods) {
    this.selectedMethod = method;
  }

  getSelectedMethod(): ServiceMethods {
    return this.selectedMethod;
  }

  setServiceModel(serviceModel: ServiceModel) {
    this.serviceModel = serviceModel;
  }

  getServiceModel() {
    return this.serviceModel;
  }
}
