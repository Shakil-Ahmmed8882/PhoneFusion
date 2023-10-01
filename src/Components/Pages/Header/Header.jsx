import { NavLink } from "react-router-dom";
import "../Header/nav.css";
import useAuth from "../../../🟢AuthProvider/AuthContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Header = () => {
  const { user , logOut} = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!user)
  


  useEffect(()=>{
    setIsLoggedIn(!!user)
  },[user])

  // funciton for logout handling
  const handleLogOut = () => {
    logOut()
    .then(()=>{
      setIsLoggedIn(true)
      toast.success('signed out')
    })
    .catch(error =>{
      toast.error(error)
    })
  }



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
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-500 text-white p-2 rounded-lg"
              : ""
          }>
          Register
        </NavLink>
        {
        isLoggedIn &&         <NavLink
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
        }
        {/* logout and login */}
        {isLoggedIn ? (
          <button className="btn bg-primary text-white" onClick={handleLogOut}>Logout</button>
        ) : (
          <NavLink
            to="/login"
            className="btn bg-primary text-white">
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
