import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const NavBar = () => {
  return (
    <div className="fixed w-full bg-black bg-opacity-20 px-[5%] py-[5%] md:py-[2%] font-poppins font-bold z-20 text-white max-w-screen-2xl">
      <nav className="flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
        >
          Logo
        </Link>
        <div className="flex justify-center items-center gap-5">
            <Link
              to="/contact"
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
            >
              Contact
            </Link>
            <Link
              to="/view-roll"
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
            >
              View Roll
            </Link>
            <Link
              to="/login"
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
            >
              Login
            </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
