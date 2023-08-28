import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = ()=>{
    logOut();
  }

  return (
    <>
      <div className="mx-24 my-[20px] font-poppins font-bold">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
          >
            Home
          </Link>


          <div className="flex justify-center items-center gap-6">
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
            to="dashboard"
            className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
          >
            Dashboard
          </Link>
          {
            user? <p className="text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110">Hi, {user.displayName}</p> : ''
          }
          {
            user? <Link
            onClick={logout}
            className="btn btn-error"
          >
            Logout
          </Link> : <Link
            to="/login"
            className="btn btn-success"
          >
            Login
          </Link>
          }
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
