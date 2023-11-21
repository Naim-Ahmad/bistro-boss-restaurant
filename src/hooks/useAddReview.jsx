import { useMutation, useQueryClient } from "@tanstack/react-query"
import useAxiosSecure from './useAxiosSecure'

export default function useAddReview() {

    const axiosSecure = useAxiosSecure()
    const queryClient = useQueryClient()

    const {data, isError, isPending, isSuccess, mutate} = useMutation({
        mutationKey: ['addReview'],
        mutationFn: async(data)=>{
            axiosSecure.post('/review', data)
        },
        onSuccess: ()=> {
            queryClient.invalidateQueries(['reviews'])
        }
    })

    return {data, isError, isPending, isSuccess, mutate}
}