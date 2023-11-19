import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios.config";

export default function useMenus() {

    const {data, isPending, isError, error, refetch} = useQuery({
        queryKey: ['getMenus'],
        queryFn: async ()=>{
            const res = await axios.get('/menus')
            return res.data;
        }
    })

    return {data, isPending, isError, error, refetch} 
}