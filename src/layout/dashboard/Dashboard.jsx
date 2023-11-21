import { Outlet } from "react-router-dom";
import DashboardNavbar from "./navbar/DashboardNavbar";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="w-1/5">
          <DashboardNavbar />
        </div>
        <div className="w-4/5 bg-[#F6F6F6]">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
