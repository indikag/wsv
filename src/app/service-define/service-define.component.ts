import { Component, OnInit } from '@angular/core';
import { ServiceModel } from './service-model-class/service-model.model';

@Component({
  selector: 'app-service-define',
  templateUrl: './service-define.component.html',
  styleUrls: ['./service-define.component.css']
})
export class ServiceDefineComponent implements OnInit {

  public serviceModel: ServiceModel = new ServiceModel();

  constructor() { }

  ngOnInit() {
    
  }

  onSaveButtonClick() {
    const newLocal = JSON.stringify(this.serviceModel);
    console.log(newLocal);
  }

}
