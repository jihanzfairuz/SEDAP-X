import { RiCustomerService2Line } from "react-icons/ri"; 
import { MdReorder, MdFastfood } from "react-icons/md"; 
import { RiDashboardFill } from "react-icons/ri"; 
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuClass = ({ isActive }) =>
  `flex items-center gap-2 p-3 rounded-xl
    ${
      isActive
        ? "bg-green-200 text-hijau font-bold"
        : "text-gray-600 hover:bg-green-200 hover:text-hijau"
    }`;

export default function Sidebar() {
  return (
    <div className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div className="flex flex-col mb-6">
        <span className="font-poppins font-[1000] text-[48px]">
          Sedap<b className="text-green-500">x</b>
        </span>
        <span className="text-gray-400 font-semibold font-barlow">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Main Menu */}
      <ul className="space-y-2">
        <li>
          <NavLink to="/" className={menuClass}>
            <RiDashboardFill /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={menuClass}>
            <MdReorder /> Order List
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" className={menuClass}>
            <RiCustomerService2Line /> Customer
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={menuClass}>
            <FaUser /> User
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={menuClass}>
            <MdFastfood /> Products
          </NavLink>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-green-500 px-4 py-3 rounded-md shadow-lg mb-6 text-white text-sm flex justify-between items-center">
          <div>
            <p>Please organize your menus through button below!</p>
            <button className="mt-2 bg-white text-green-700 font-semibold px-3 py-1 rounded-md">
              Add Menus
            </button>
          </div>
          <img
            className="w-16 h-16 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
            alt="avatar"
          />
        </div>
        <div className="text-gray-400 text-xs font-light">
          <div className="font-bold">Sedap Restaurant Admin Dashboard</div>
          &copy; 2025 All Right Reserved
        </div>
      </div>
    </div>
  );
}
