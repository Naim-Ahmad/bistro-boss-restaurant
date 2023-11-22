import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    withCredentials: true,
})


export default function useAxiosSecure() {

    const navigate = useNavigate()
    const {logOut} = useAuth()

    axiosInstance.interceptors.request.use((config)=>{
        const token = localStorage.getItem('token')
        config.headers.authentication = `Bearer ${token}`;
        return config;
    }, (err)=>{
        return Promise.reject(err)
    })

    axiosInstance.interceptors.response.use((response)=>{
        return response;
    }, async (err)=>{
        const status = err.response.status;
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')

        }
        return Promise.reject(err)
    })

    return axiosInstance;
}