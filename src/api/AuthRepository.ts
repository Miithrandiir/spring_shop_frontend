import axiosInstance from "../axios";
import LoginResponse from "./models/LoginResponse";

export async function login(username: string, password: string): Promise<LoginResponse> {
    const response = await axiosInstance.post<LoginResponse>("/api/auth", {
        username,
        password,
    });
    return response.data;
}

