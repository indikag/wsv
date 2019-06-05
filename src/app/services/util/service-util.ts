import { environment } from '../../../environments/environment';

export class ServiceUtil {
    private static serviceName = 'jsv/rest/';
    private static servicePrefix = environment.server_URL + ServiceUtil.serviceName;

    // Service methods
    public static getLoginUrl(): string {
        return ServiceUtil.servicePrefix + 'user/login';
    }

    public static getUserByUserId(userId: string) {
        return ServiceUtil.servicePrefix + 'user/get?id=' + userId;
    }

    public static getServicesByUserId(userId: string) {
        return ServiceUtil.servicePrefix + 'service/get?id=' + userId;
    }

    public static getGroupsByUserId(userId: string) {
        return ServiceUtil.servicePrefix + 'group/get?id=' + userId;
    }

    public static getServicesByGroupId(userId: string) {
        return ServiceUtil.servicePrefix + 'service/get?id=' + userId;
    }

    public static addService(groupId: string) {
        return ServiceUtil.servicePrefix + 'service/add?groupId=' + groupId;
    }

    public static getServiceByServiceId(serviceId: string) {
        return ServiceUtil.servicePrefix + 'service/getService?id=' + serviceId;
    }

    public static deleteService(serviceId: string) {
        return ServiceUtil.servicePrefix + 'service/delete?id=' + serviceId;
    }

    public static publishService(serviceId: string) {
        return ServiceUtil.servicePrefix + 'service/publish?id=' + serviceId;
    }

    public static unpublishService(serviceId: string) {
        return ServiceUtil.servicePrefix + 'service/unpublish?id=' + serviceId;
    }
}
