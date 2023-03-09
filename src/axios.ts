import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

axiosInstance.interceptors.request.use(async function (config) {
   let token:string|null = localStorage.getItem("token");
    if (token && config.headers) {
        config.headers.Authorization = "Bearer " +token;
    }

    return config;
});

export default axiosInstance;
