import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";
import useAdmin from "../DataFetch/useAdmin";
import {LuSettings2} from 'react-icons/lu'
import {BiSolidUserCheck} from 'react-icons/bi'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    logOut();
  };

  return (
    <>
      <div className="mx-24 my-[20px] font-poppins font-bold">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
          >
            <img
              className="h-[50px]"
              src="https://i.ibb.co/n80R2cQ/eresult.png"
              alt=""
            />
          </Link>

          <div className="flex justify-center items-center gap-6">
            <Link
              to="/contact"
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
            >
              Contact
            </Link>

            {user ? (
              <Link
                to="differdashboard"
                className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
              >
                Dashboard
              </Link>
            ) : (
              ""
            )}
            {/* {user ? (
              <p className="text-center transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110">
                Hi, {user.displayName}
              </p>
            ) : (
              ""
            )} */}
            {
              user ?  
              <div className="dropdown">
                <label tabIndex={0} className="flex justify-center"><img className="rounded-full border-4 border-green-400 h-[50px]" src={user.photoURL} alt="" /></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/updateProfile'><LuSettings2 className="text-xl"></LuSettings2>Update Profile </Link>
                  </li>
                  <li><p><BiSolidUserCheck className="text-xl"></BiSolidUserCheck>{user.displayName}</p></li>
                </ul>
              </div> : ''
            }
            {user ? (
              <Link onClick={logout} className="btn btn-error">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="btn btn-success">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
