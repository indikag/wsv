import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { Service } from '../model/activeservice.model';
import { ServiceUser } from '../model/serviceuser.model';
import { WsCallback } from '../services/util/ws-callback';
import { WsResponse } from '../services/util/ws-response.model';
import { WsType } from '../services/util/ws-type';
import { UserService } from '../services/user.service';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
import { UserGroupService } from '../services/user-group.service';

@Component({
	selector: 'app-servicelist',
	templateUrl: './servicelist.component.html',
	styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit, WsCallback {
	public constants = Constants;
	private userId;
	private userGroupList: any = [];

	constructor(private servicesService: UserServicesService, private userService: UserService,
		 private router: Router, private groupService: UserGroupService) {
		this.userId = localStorage.getItem(Constants.WSV_USER);
	}

	ngOnInit() {
		// this.userService.getUser(this.userId, this);
		this.groupService.getUserGroups(this.userId, this);
	}

	onSuccess(data: WsResponse, serviceType: WsType) {
		if (serviceType === WsType.GET_SERVICES_BY_USER_ID) {
			console.log(data);
		} else if (serviceType === WsType.GET_USER_BY_USER_ID) {
			console.log(data);
		} else if (serviceType === WsType.GET_GROUPS_BY_USER_ID) {
			this.userGroupList = data.payload;
			console.log(this.userGroupList.length);
		}
	}
	onFail(data: WsResponse, serviceType: WsType) {
		if (serviceType === WsType.GET_SERVICES_BY_USER_ID) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.GET_USER_BY_USER_ID) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.GET_GROUPS_BY_USER_ID) {
			console.log(data.statusDescription);
		}
	}

	public loadLogsPage() {
		this.router.navigateByUrl('logs');
	}

	public loadEditPage() {
		this.router.navigateByUrl('service');
	}


}
