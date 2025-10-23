import apiInstance from "../http";

export default class RegisterService {
    static async register(data: any): Promise<void> {
        return apiInstance.post(`/register`, data, );
    }
}