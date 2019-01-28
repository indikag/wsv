import { Component, OnInit } from '@angular/core';
import { WsCallback } from './src/app/util/ws-callback';
import { WsType } from 'src/app/util/ws-type';
import { WsResponse } from 'src/app/util/ws-response.model';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, WsCallback {
	public userName: string;
	public password: string;

	constructor(private userService: UserServiceService, private router: Router) { }

	public clickOnSignInButton() {
		console.log('click on the save button, uname=' + this.userName + ' pass=' + this.password);
		// const request = { userName: this.userName, password: this.password };
		// console.log(request);
		// this.userService.login(request, this);
		this.router.navigateByUrl('home');
	}

	onSuccess(data: WsResponse, serviceType: WsType) {
		console.log('success ' + data);
		// this.router.navigateByUrl('home');
	}

	onFail(data: WsResponse, serviceType: WsType) {
		console.log('error');
	}

	ngOnInit() {
	}
}