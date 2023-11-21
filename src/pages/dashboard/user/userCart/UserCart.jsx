import MySpinner from "../../../../components/MySpinner";
import SectionHeader from "../../../../components/SectionHeader";
import useCart from "../../../../hooks/useCart";
import CartTable from "./CartTable";

export default function UserCart() {
  const  {data, isPending} = useCart()

  if(isPending) return <MySpinner/>

  const totalPrice = data.reduce((acc, cur)=> acc + cur.price, 0)


  return (
    <div className="bg-[#F6F6F6]">
      <SectionHeader title="WANNA ADD MORE?" subTitle="---My Cart---" />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
        <div className="overflow-x-auto">
          <div className="flex justify-between mb-10 items-center">
            <p className="text-2xl font-bold">Total Orders: {data.length}</p>
            <p className="text-2xl font-bold">Total Price: {totalPrice}</p>
            <button className="btn btn-warning mr-10">Pay</button>
          </div>
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
