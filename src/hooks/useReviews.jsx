import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios.config";

export default function useReviews() {

    const {data, isPending, isError, error, refetch} = useQuery({
        queryKey: ['getReviews'],
        queryFn: async ()=>{
            const result = await axios.get('/reviews')
            return result.data;
        }
    })

    return {data, isPending, isError, error, refetch} 
}