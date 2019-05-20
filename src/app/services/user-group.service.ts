import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WsCallback } from './util/ws-callback';
import { WsType } from './util/ws-type';
import { ServiceUtil } from './util/service-util';
import { WsResponse } from './util/ws-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor(private http: HttpClient) { }

  public getUserGroups(userId: string, callBack: WsCallback): void {
    this.http.get(ServiceUtil.getGroupsByUserId(userId)).subscribe(
        data => {
            const modified = JSON.parse(JSON.stringify(data));
            const res = new WsResponse(
                modified.status.description,
                modified.status.code,
                modified.status.name,
                modified.payload);
            callBack.onSuccess(res, WsType.GET_GROUPS_BY_USER_ID);
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
                callBack.onFail(res, WsType.GET_GROUPS_BY_USER_ID);
            } else {
                // browser related issues
                const res = new WsResponse('Unknown error happened');
                callBack.onFail(res, WsType.GET_GROUPS_BY_USER_ID);
            }
        }
    );
}
}
