import { useQuery } from "@tanstack/react-query"
import useAuth from './useAuth'
import useAxiosSecure from "./useAxiosSecure"

export default function useCart() {

    const {user} = useAuth()
    const axios = useAxiosSecure()

    const {data, isError, isPending, isSuccess} = useQuery({
        queryKey: ['getCart'],
        queryFn: async ()=>{
            const res = await axios.get(`/cart/${user?.email}`)
            return res.data;
        }
    })

    return {data, isError, isPending, isSuccess}
}