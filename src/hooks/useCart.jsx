import { useQuery } from "@tanstack/react-query"
import useAuth from './useAuth'
import useAxiosSecure from "./useAxiosSecure"

export default function useCart() {

    const {user} = useAuth()

    const axios = useAxiosSecure()

    console.log(user?.email)

    const {data, isError, isPending, isSuccess, status, refetch} = useQuery({
        queryKey: ['getCart', user?.email],
        queryFn: async ()=>{
            const res = await axios.get(`/cart/${user?.email}`)
            return res.data;
        }
    })

    return {data, isError, isPending, isSuccess, status, refetch}
}