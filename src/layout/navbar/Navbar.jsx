import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [data, setData] = useState([])
  const {data:loadedData = [], status} = useCart()

  useEffect(()=>{
    if(status === 'success'){
      setData(loadedData)
    }
  },[loadedData, status])

  const menuItemData = [
    { page: "Home", route: "/" },
    { page: "ContactUs", route: "/contact-us" },
    { page: "Dashboard", route: "/dashboard" },
    { page: "Our Menu", route: "/our-menu" },
    { page: "Our Shop", route: "/our-shop/salad" },
  ];

  const listItems = (
    <>
      {menuItemData.map((menuItem) => (
        <li key={menuItem.route}>
          <NavLink to={menuItem.route}>{menuItem.page}</NavLink>
        </li>
      ))}
      {/* <li><Link><button className="btn btn-outline btn-warning btn-sm">Login</button></Link></li> */}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Logout Successful!");
        setData([])
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

//  console.log('navbar render', data)
  return (
    <nav className="bg-black fixed top-0 z-10 w-full text-white bg-opacity-60">
      <div className="navbar max-w-7xl  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems}
            </ul>
          </div>
          <div className="uppercase">
            <h1 className="text-2xl font-extrabold ">Bistro Boss</h1>
            <p className="tracking-[6px]">Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {listItems}
          </ul>
          <div className="flex">
            <Link to="/dashboard/cart">
              <button className="btn btn-ghost">
                <IoMdCart size={25} />
                <div className="badge badge-secondary">{data?.length}</div>
              </button>
            </Link>
          </div>
          {user ? (
            <button
              className="btn btn-outline btn-warning btn-sm ml-6"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="ml-6">
              <button className="btn btn-outline btn-warning btn-sm">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
