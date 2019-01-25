import { environment } from '../../environments/environment';

export class ServiceUtil {
    private static serviceName = 'jsv/rest/';
    private static servicePrefix = environment.server_URL + ServiceUtil.serviceName;

    // Service methods
    public static getLoginUrl(): string {
        return ServiceUtil.servicePrefix + 'user/login';
    }
}
