import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="border bg-sky-500 h-screen md:w-[400px] flex flex-col justify-center items-center space-y-5 text-3xl text-white">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/edit">Edit</Link>
      </div>
    </div>
  );
};

export default Menu;
