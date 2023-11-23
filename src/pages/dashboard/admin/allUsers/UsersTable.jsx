import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


export default function UsersTable({ data, ind }) {
  //   console.log(Object.keys(data).join(","));
  const { _id, name, email, role } = data;
  const axiosSecure = useAxiosSecure()
  const queryClient = useQueryClient();
  const {
    data: deletedData,
    isSuccess,
    mutate,
  } = useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/user/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["allUsers"]);
    },
  });



  if (isSuccess && deletedData.deletedCount) {
    Swal.fire({
      icon: "success",
      title: "deleted",
      text: "Deleted user Successful!",
    });
  }

  const handleDelete = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {

        if (result.isConfirmed) {
          mutate(id)
        }
      });
    
  }

  const handleAdmin = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {

        if (result.isConfirmed) {
            const result = await axiosSecure.put(`/admin/makeAdmin/${id}`)
           if(result.data.modifiedCount){
            queryClient.invalidateQueries(['allUsers'])
            Swal.fire({
                icon: "success",
                title: "admin",
                text: `${name} Admin Now`,
              });
           }
        }
      });
  }


  return (
    <tr>
      <th>{ind + 1}</th>

      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>{email}</td>
      <td>
        {role !== 'admin' ? <button onClick={()=>handleAdmin(_id)} className="btn bg-warning">
          <FaUsers className="text-white" size={20} />
        </button> : <button  className="btn bg-warning text-white btn-xs">
          Admin
        </button>}
      </td>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          <MdDelete size={20} className="text-white" />
        </button>
      </th>
    </tr>
  );
}
