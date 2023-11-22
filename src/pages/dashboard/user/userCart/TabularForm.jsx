
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "../../../../config/axios.config";

export default function CartTable({ data, ind }) {
  //   console.log(Object.keys(data).join(","));
  const queryClient = useQueryClient()
  const {data:deletedData, isSuccess, mutate}= useMutation({
    mutationKey: ['deleteCart'],
    mutationFn: async (id)=> {
        const res = await axios.delete(`/cart/${id}`)
        return res.data;
    },
    onSuccess: ()=>{
        queryClient.invalidateQueries(['getCart'])
    }
  })

  if(isSuccess && deletedData.deletedCount){
    Swal.fire({
        icon: 'success',
        title: 'deleted',
        text: 'Deleted Cart Successful!'
    })
  } 

  const { _id, name, image, price } = data;
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>${price}</td>
      <th>
        <button onClick={()=> mutate(_id)} className="btn btn-ghost btn-xs">
          <MdDelete className="text-error" size={20} />
        </button>
      </th>
    </tr>
  );
}
