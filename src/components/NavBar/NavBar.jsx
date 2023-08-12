import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";

const NavBar = () => {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-4 my-4 md:mx-8 lg:mx-14  font-poppins font-bold">
      <nav ref={navRef} className="flex justify-between items-center">
        <Link
          to="/"
          className="transition ease-in-out delay-75 text-2xl hover:-translate-y-1 hover:scale-110"
        >
          Logo
        </Link>
        {/* Show the hamburger icon in small and medium devices */}
        <div className="md:hidden">
          <button
            className="menu-icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Menu items */}
        <div
          className={`md:block ${
            isMenuOpen ? "block" : "hidden"
          } flex flex-col md:space-x-8 `}
        >
          <Link
            to="/contact"
            className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
          >
            Home
          </Link>
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
