import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.mode==="deveolpment" ? "http://localhost:5000/api": "/api",
    withCredentials: true,
})
export default axiosInstance;