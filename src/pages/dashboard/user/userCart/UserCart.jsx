import MySpinner from "../../../../components/MySpinner";
import SectionHeader from "../../../../components/SectionHeader";
import useCart from "../../../../hooks/useCart";
import CartTable from "./CartTable";

export default function UserCart() {
  const  {data, isPending} = useCart()

  if(isPending) return <MySpinner/>

  return (
    <div>
      <SectionHeader title="WANNA ADD MORE?" subTitle="---My Cart---" />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((cartData, ind)=> <CartTable data={cartData} ind={ind} key={cartData._id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
