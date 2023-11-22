import { useQuery } from "@tanstack/react-query";
import MySpinner from "../../../../components/MySpinner";
import SectionHeader from "../../../../components/SectionHeader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import UsersTable from "./UsersTable";

export default function AllUsers() {
    const axiosSecure = useAxiosSecure()
  const  {data, isPending} = useQuery({
    queryKey: ['allUsers'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/users')
        return res.data;
    }
  })

  if(isPending) return <MySpinner/>

  return (
    <div className="bg-[#F6F6F6]">
      <SectionHeader title="WANNA ADD MORE?" subTitle="---My Cart---" />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
        <div className="overflow-x-auto">
          <div className="mb-10">
            <p className="text-2xl font-bold">Total Users: {data.length}</p>
           
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((usersData, ind)=> <UsersTable data={usersData} ind={ind} key={usersData._id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
