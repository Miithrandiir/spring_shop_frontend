import {User} from "../api/models/User";
import axiosInstance from "../axios";
import Order from "../api/models/Order";

export class UserLoader {
    user: User;
    orders: Array<Order> = [];

    constructor(user: User, orders: Array<Order>) {
        this.user = user;
        this.orders = orders;
    }
}

export async function userLoader() {
    const data = await axiosInstance.get<User>('/users/me');
    const data2 = await axiosInstance.get<Array<Order>>('/orders');
    return new UserLoader(data.data, data2.data);
}
