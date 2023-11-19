import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    withCredentials: true,
})


export default function useAxiosSecure() {

    return axiosInstance;
}