import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios.config";

export default function useMenus(field, value) {

    const {data, isPending, isError, error, refetch} = useQuery({
        queryKey: ['getMenus'],
        queryFn: async ()=>{
            const url = field && value ? `/menus?${field}=${value}`: '/menus';
            console.log(url)
            const res = await axios.get(url)
            return res.data;
        }
    })

    return {data, isPending, isError, error, refetch} 
}