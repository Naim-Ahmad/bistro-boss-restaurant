import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

export default function ItemsTable({ data, ind }) {
  //   console.log(Object.keys(data).join(","));
  const { _id, name, price, image } = data;
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    data: deletedData,
    isSuccess,
    mutate,
  } = useMutation({
    mutationKey: ["deleteItem"],
    mutationFn: async (id) => {
      console.log(id);
      const res = await axiosSecure.delete(`/menus/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["getMenus"]);
    },
  });

  if (isSuccess && deletedData.deletedCount) {
    Swal.fire({
      icon: "success",
      title: "deleted",
      text: "Deleted menu Successful!",
      timer: 1500,
      showConfirmButton: false,
    });
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
        console.log(id);
      }
    });
  };

  return (
    <tr>
      <th>{ind + 1}</th>

      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>

      <td>${price}</td>

      <th>
        <Link to={`/dashboard/updateItems/${_id}`}>
          <button className="btn btn-error">
            <MdEdit size={20} className="text-white" />
          </button>
        </Link>
      </th>

      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          <MdDelete size={20} className="text-white" />
        </button>
      </th>
    </tr>
  );
}
