import { NavLink } from "react-router-dom";
import logo from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

export default function Navbar() {
  const menuItemData = [
    { page: "Home", route: "/home" },
    { page: "ContactUs", route: "/contact-us" },
    { page: "Dashboard", route: "/dashboard" },
    { page: "Our Menu", route: "/our-menu" },
    { page: "Our Shop", route: "/our-shop" },
  ];
  const listItems = (
    <>
      {menuItemData.map((menuItem) => (
        <li key={menuItem.route}>
          <NavLink to={menuItem.route}>{menuItem.page}</NavLink>
        </li>
      ))}
    </>
  );
  return (
    <nav className="bg-black fixed top-0 z-10 w-full text-white bg-opacity-30">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
          <ul className="menu menu-horizontal px-1">{listItems}</ul>
          <figure className="w-10">
            <img src={logo} alt="" />
          </figure>
          <button className="ml-4 btn btn-ghost">Login</button>
        </div>
      </div>
    </nav>
  );
}
