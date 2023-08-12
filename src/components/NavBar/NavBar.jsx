import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-24 my-[20px] font-poppins font-bold">
      <nav className="flex justify-between items-center  gap-14 ">
        <Link
          to="/"
          className=" transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
        >
          Home
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link
            to="/contact"
            className=" transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
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
