import { WsType } from './ws-type';
import { WsResponse } from './ws-response.model';

export interface WsCallback {
    onSuccess(data: WsResponse, serviceType: WsType);
    onFail(data: WsResponse, serviceType: WsType);
}
