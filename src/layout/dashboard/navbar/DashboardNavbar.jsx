import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { SiReverbnation } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function DashboardNavbar() {
  return (
    <div className="drawer md:drawer-open bg-[#D1A054] w-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full pl-10">
          {/* Sidebar content here */}
          <li className="flex">
            <NavLink className="font-medium capitalize text-lg" to="userHome"> <FaHome/> User Home</NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="reservation"> <FaCalendarAlt /> Reservation</NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="paymentHistory"> <FaWallet/> paymentHistory</NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="cart"> <IoMdCart /> My Cart</NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="review"> <SiReverbnation /> Add Review</NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="booking"> <LuCalendarClock /> My Booking</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
