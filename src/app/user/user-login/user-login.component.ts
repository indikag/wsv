import { Component, OnInit } from '@angular/core';
import { WsCallback } from '../../services/util/ws-callback';
import { WsType } from '../../services/util/ws-type';
import { WsResponse } from '../../services/util/ws-response.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Constants } from 'src/app/util/constants';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, WsCallback {

	public userName: string;
	public password: string;

	public showPassword: boolean = false;

	constructor(private userService: UserService, private router: Router) { }

	public clickOnSignInButton() {
		console.log('click on the save button, uname=' + this.userName + ' pass=' + this.password);
		 const request = { userName: this.userName, password: this.password };
		 this.userService.login(request, this);
		// this.router.navigateByUrl('home');
	}

	onSuccess(data: WsResponse, serviceType: WsType) {
		console.log('success ' + data);
		if (serviceType === WsType.LOGIN) {
			localStorage.setItem(Constants.WSV_USER, data.payload);
			this.router.navigateByUrl('home');
		}
	}

	onFail(data: WsResponse, serviceType: WsType) {
		if (serviceType === WsType.LOGIN) {
			console.log(data.statusDescription);
		}
	}

	ngOnInit() {
	}
}