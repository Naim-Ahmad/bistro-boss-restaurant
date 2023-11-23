import MySpinner from "../../../../components/MySpinner";
import SectionHeader from "../../../../components/SectionHeader";
import useMenus from "../../../../hooks/useMenus";
import ItemsTable from "./ItemsTable";

export default function AllUsers() {

  const { data, isPending } = useMenus();

  if (isPending) return <MySpinner />;

  return (
    <div className="bg-[#F6F6F6]">
      <SectionHeader title="MANAGE ALL ITEMS" subTitle="---Hurry Up!---" />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
        <div className="overflow-x-auto">
          <div className="mb-10">
            <p className="text-2xl font-bold">Total Items: {data.length}</p>
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((usersData, ind) => (
                <ItemsTable data={usersData} ind={ind} key={usersData._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
