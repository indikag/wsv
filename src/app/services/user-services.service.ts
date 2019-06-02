import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WsCallback } from './util/ws-callback';
import { WsType } from './util/ws-type';
import { ServiceUtil } from './util/service-util';
import { WsResponse } from './util/ws-response.model';
import { post } from 'selenium-webdriver/http';

@Injectable({
    providedIn: 'root'
})
export class UserServicesService {

    constructor(private http: HttpClient) { }

    public getServicesByUserId(userId: string, callBack: WsCallback) {
        this.http.get(ServiceUtil.getServicesByUserId(userId)).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.GET_SERVICES_BY_USER_ID);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.GET_SERVICES_BY_USER_ID);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.GET_SERVICES_BY_USER_ID);
                }
            }
        );
    }

    /**
     * Gets services by group id
     * @param groupId id of the user group
     * @param callBack  callback class
     */
    public getServicesByGroupId(groupId: string, callBack: WsCallback) {
        this.http.get(ServiceUtil.getServicesByGroupId(groupId)).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.GET_SERVICES_BY_GROUP_ID);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.GET_SERVICES_BY_GROUP_ID);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.GET_SERVICES_BY_GROUP_ID);
                }
            }
        );
    }

    /**
     * Adding a new service.
     * @param postData {"serviceId":"","jsonFile":"","serviceName":"","serviceUrl":"","published":"","groups":null}
     * @param callBack callback class
     */
    public addService(postData: any, callBack: WsCallback) {
        this.http.post(ServiceUtil.addService(), postData).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.GET_SERVICES_BY_GROUP_ID);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.GET_SERVICES_BY_GROUP_ID);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.GET_SERVICES_BY_GROUP_ID);
                }
            }
        );
    }

    /**
     * Get service model by service id.
     * @param serviceId id of the service
     * @param callBack callback class
     */
    public addServgetServiceByServiceIdice(serviceId: string, callBack: WsCallback) {
        this.http.get(ServiceUtil.getServiceByServiceId(serviceId)).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.GET_SERVICES_BY_GROUP_ID);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.GET_SERVICES_BY_GROUP_ID);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.GET_SERVICES_BY_GROUP_ID);
                }
            }
        );
    }

    /**
     * Delete a service by service ID.
     * @param serviceId id of the service to be delete.
     * @param callBack callback class.
     */
    public deleteService(serviceId: string, callBack: WsCallback) {
        this.http.get(ServiceUtil.deleteService(serviceId)).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.DELETE_SERVICE);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.DELETE_SERVICE);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.DELETE_SERVICE);
                }
            }
        );
    }

    /**
     * Publish a service
     * @param serviceId service id
     * @param callBack callback class
     */
    public publishService(serviceId: string, callBack: WsCallback) {
        this.http.get(ServiceUtil.publishService(serviceId)).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.PUBLISH_SERVICE);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.PUBLISH_SERVICE);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.PUBLISH_SERVICE);
                }
            }
        );
    }

    /**
     * Remove publish status from a service
     * @param serviceId service id
     * @param callBack callback class
     */
    public unpublishService(serviceId: string, callBack: WsCallback) {
        this.http.get(ServiceUtil.unpublishService(serviceId)).subscribe(
            data => {
                const modified = JSON.parse(JSON.stringify(data));
                const res = new WsResponse(
                    modified.status.description,
                    modified.status.code,
                    modified.status.name,
                    modified.payload);
                callBack.onSuccess(res, WsType.UNPUBLISH_SERVICE);
            },
            error => {
                if (error.status !== '') {
                    const val = (error as HttpErrorResponse).error;
                    const modified = JSON.parse(JSON.stringify(val));
                    const res: WsResponse = new WsResponse(
                        modified.status.description,
                        modified.status.code,
                        modified.status.name,
                        modified.payload);
                    callBack.onFail(res, WsType.UNPUBLISH_SERVICE);
                } else {
                    // browser related issues
                    const res = new WsResponse('Unknown error happened');
                    callBack.onFail(res, WsType.UNPUBLISH_SERVICE);
                }
            }
        );
    }
}
