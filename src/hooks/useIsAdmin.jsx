import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

export default function useIsAdmin() {
    const axiosSecure = useAxiosSecure()
    const {user}  = useAuth()

    const {data:isAdmin, isPending} =  useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/admin/isAdmin/${user?.email}`)
            return res.data;
        }
    })

    return {isAdmin, isPending}
}