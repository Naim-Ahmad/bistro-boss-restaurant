import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import { ImList2 } from "react-icons/im";
import { IoMdCart } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineMenuBook, MdOutlineRestaurant, MdSms } from "react-icons/md";
import { SiReverbnation } from "react-icons/si";
import { NavLink } from "react-router-dom";
import useIsAdmin from "../../../hooks/useIsAdmin";

export default function DashboardNavbar() {
  const {isAdmin} = useIsAdmin();
  console.log(isAdmin)

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
        <ul className="menu p-4 w-80 min-h-full">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li className="flex">
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="adminHome"
                >
                  {" "}
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="addItem"
                >
                  {" "}
                  <MdOutlineRestaurant /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="manageItem"
                >
                  {" "}
                  <ImList2 /> Manage items
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium capitalize text-lg" to="manageBooking">
                  {" "}
                  <FaBook /> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium capitalize text-lg" to="allUsers">
                  {" "}
                  <IoMdCart /> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex">
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="userHome"
                >
                  {" "}
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="reservation"
                >
                  {" "}
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="paymentHistory"
                >
                  {" "}
                  <FaWallet /> paymentHistory
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium capitalize text-lg" to="cart">
                  {" "}
                  <IoMdCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium capitalize text-lg" to="review">
                  {" "}
                  <SiReverbnation /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium capitalize text-lg"
                  to="booking"
                >
                  {" "}
                  <LuCalendarClock /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <li><div className="divider"></div></li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="/">
              {" "}
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="/our-menu">
              {" "}
              <MdOutlineMenuBook /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-medium capitalize text-lg"
              to="/our-shop/salad"
            >
              {" "}
              <FaShoppingBag /> shop
            </NavLink>
          </li>
          <li>
            <NavLink className="font-medium capitalize text-lg" to="/contact">
              {" "}
              <MdSms /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
