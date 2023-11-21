import { useMutation, useQueryClient } from "@tanstack/react-query"
import useAxiosSecure from './useAxiosSecure'

export default function useAddCart() {

    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()

    const {data, isError, isPending, isSuccess, mutate} = useMutation({
        mutationKey: ['addCart'],
        mutationFn: async(data)=>{
            const res = await axiosSecure.post('/cart', data)
            return res.data;
        },
        onSuccess: ()=> {
            queryClient.invalidateQueries(['getCart'])
        }
    })

    return {data, isError, isPending, isSuccess, mutate}
}