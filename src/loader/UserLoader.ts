import {User} from "../api/models/User";
import axiosInstance from "../axios";

export class UserLoader {
    user: User;

    constructor(user: User) {
        this.user = user;
    }
}

export async function userLoader() {
    const data = await axiosInstance.get<User>('/users/me');
    return new UserLoader(data.data);
}
