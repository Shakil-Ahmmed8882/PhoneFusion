import { NavLink } from "react-router-dom";
import "../Header/nav.css";

const Header = () => {
  return (
    <div className="flex shadow-lg py-3 md:py-0 justify-between items-center px-5">
      <div>
        <img
          className="w-[65px]"
          src="https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg"
          alt=""
        />
      </div>
      <nav className="h-[80px] hidden md:flex items-center gap-5 pr-8">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-500 text-white p-2 rounded-lg"
              : ""
          }>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-500 text-white p-2 rounded-lg"
              : ""
          }>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-500 text-white p-2 rounded-lg"
              : ""
          }>
          Contact
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-500 text-white p-2 rounded-lg"
              : ""
          }>
          Service
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-500 text-white p-2 rounded-lg"
              : ""
          }>
          Dashboard
        </NavLink>
        {/* Toggler */}
        <div className="flex items-center gap-x-3">
        <strong>Login</strong>
        <input type="checkbox" className="toggle toggle-info" checked />

        </div>
      </nav>
    </div>
  );
};

export default Header;
