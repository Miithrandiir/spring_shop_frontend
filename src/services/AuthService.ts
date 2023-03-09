import LoginResponse from "../api/models/LoginResponse";
import axiosInstance from "../axios";
import {User} from "../api/models/User";
import RegisterForm from "../form/RegisterForm";

interface IAuthService {
    login(username: string, password: string): Promise<LoginResponse>;

    register(user: RegisterForm): Promise<User>;
}

class AuthService implements IAuthService {
    async login(username: string, password: string): Promise<LoginResponse> {
        const response = await axiosInstance.post<LoginResponse>("/api/auth", {
            username,
            password,
        });
        localStorage.setItem("token", response.data.token);
        return response.data;
    }

    async register(user: RegisterForm): Promise<User> {
        const response = await axiosInstance.post<User>("/users/register", user);

        return response.data;
    }
}

const authService: IAuthService = new AuthService();
export default authService;
