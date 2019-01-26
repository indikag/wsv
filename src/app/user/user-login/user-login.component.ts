import { Component, OnInit } from '@angular/core';
import { WsCallback } from 'src/app/services/util/ws-callback';
import { WsType } from 'src/app/services/util/ws-type';
import { WsResponse } from 'src/app/services/util/ws-response.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, WsCallback {
  public userName: string;
  public password: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  public clickOnSignInButton() {
    console.log('click on the save button, uname=' + this.userName + ' pass=' + this.password);
    const request = {userName: this.userName, password: this.password};
    console.log(request);
    this.userService.login(request, this);
  }

  onSuccess(data: WsResponse, serviceType: WsType) {
    console.log('success ' + data);
  }

  onFail(data: WsResponse, serviceType: WsType) {
    console.log('error');
  }

}
