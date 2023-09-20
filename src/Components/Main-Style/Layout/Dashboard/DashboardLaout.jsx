import { Outlet } from "react-router-dom";
import Menu from "./Menu";



const DashboardLaout = () => {
      return (
            <div className="md:flex">
                  <Menu></Menu>
                  <Outlet></Outlet>
            </div>
      );
};

export default DashboardLaout;