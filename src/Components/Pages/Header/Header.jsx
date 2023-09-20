import { NavLink } from "react-router-dom";
import '../Header/nav.css'

const Header = () => {
      return (
            <div className="flex shadow-lg py-3 md:py-0 justify-between items-center px-5">
                  <div>
                        <img className="w-[50px]" src="https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg" alt="" />
                  </div>
                  <nav className="h-[80px] hidden md:flex items-center gap-5 pr-8">
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/about'>About</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                  <NavLink to='/service'>Service</NavLink>
                  </nav>                  
            </div>
      );
};

export default Header;