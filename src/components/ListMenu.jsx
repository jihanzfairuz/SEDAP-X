import { RiCustomerServiceFill } from "react-icons/ri"; 
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

const menuClass = ({ isActive }) =>
  `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink to="/" id="menu-1" className={menuClass}>
            <MdDashboard className="mr-4 text-xl" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" id="menu-2" className={menuClass}>
            <BiAlignLeft className="mr-4 text-xl" />
            <span>Order List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" id="menu-3" className={menuClass}>
            <RiCustomerServiceFill className="mr-4 text-xl" />
            <span>Customer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" id="menu-4" className={menuClass}>
            <AiOutlineUser className="mr-4 text-xl" />
            <span>User</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" id="menu-5" className={menuClass}>
            <MdFastfood className="mr-4 text-xl" />
            <span>Products</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
