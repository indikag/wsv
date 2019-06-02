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
import { AlertService } from '../util/alert/alert.service';

@Component({
	selector: 'app-servicelist',
	templateUrl: './servicelist.component.html',
	styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit, WsCallback {
	public constants = Constants;
	private userId;
	private userGroupList: any = [];
	private userServiceList: any = [];

	constructor(private servicesService: UserServicesService, private userService: UserService,
		 private router: Router, private groupService: UserGroupService, private alertService: AlertService) {
		this.userId = localStorage.getItem(Constants.WSV_USER);
	}

	ngOnInit() {
		// this.userService.getUser(this.userId, this);
		this.groupService.getUserGroups(this.userId, this);
	}

	public filter(itemList: any[], published: boolean): any[] {
		const result: any[] = [];
		itemList.forEach(item => {
		  if (item.published === published) {
			  result[result.length] = item;
		  }
		});
		return result;
	  }

	onSuccess(data: WsResponse, serviceType: WsType) {
		if (serviceType === WsType.GET_SERVICES_BY_USER_ID) {
			console.log(data);
		} else if (serviceType === WsType.GET_USER_BY_USER_ID) {
			console.log(data);
		} else if (serviceType === WsType.GET_GROUPS_BY_USER_ID) {
			this.userGroupList = data.payload;
			console.log(this.userGroupList.length);
			this.userGroupList.forEach(group => {
				this.servicesService.getServicesByGroupId(group.groupId, this);
			});
		} else if (serviceType === WsType.GET_SERVICES_BY_GROUP_ID) {
			this.userServiceList = [];
			data.payload.forEach(item => {
				this.userServiceList[this.userServiceList.length] = item;
			});
		} else if (serviceType === WsType.DELETE_SERVICE) {
			if (data.payload === true) {
				this.alertService.success('Service was deleted successfully');
				this.groupService.getUserGroups(this.userId, this);
			} else {
				this.alertService.error('Service deletion failed');
			}
		} else if (serviceType === WsType.PUBLISH_SERVICE) {
			this.alertService.success('Service was published successfully');
			this.groupService.getUserGroups(this.userId, this);
		} else if (serviceType === WsType.UNPUBLISH_SERVICE) {
			this.alertService.success('Service was unpublished successfully');
			this.groupService.getUserGroups(this.userId, this);
		}
	}
	onFail(data: WsResponse, serviceType: WsType) {
		if (serviceType === WsType.GET_SERVICES_BY_USER_ID) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.GET_USER_BY_USER_ID) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.GET_GROUPS_BY_USER_ID) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.GET_SERVICES_BY_GROUP_ID) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.DELETE_SERVICE) {
			console.log(data.statusDescription);
		} else if (serviceType === WsType.PUBLISH_SERVICE) {
			this.alertService.success('Service publishing failed');
			console.log(data.statusDescription);
		} else if (serviceType === WsType.UNPUBLISH_SERVICE) {
			this.alertService.success('Service unpublishing failed');
			console.log(data.statusDescription);
		}
	}

	public loadLogsPage(serviceid: any) {
		this.router.navigateByUrl('logs');
	}

	public loadEditPage(serviceid: any) {
		this.router.navigateByUrl('service');
	}

	public publishService(serviceid: any) {
		this.servicesService.publishService(serviceid, this);
	}

	public unpublishService(serviceid: any) {
		this.servicesService.unpublishService(serviceid, this);
	}

	public deleteService(serviceid: any) {
		console.log('DELETE serviceId = ' + serviceid);
		this.servicesService.deleteService(serviceid, this);
	}
}
