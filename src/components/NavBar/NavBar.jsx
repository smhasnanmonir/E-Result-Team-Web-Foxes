import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-24 my-[20px] font-poppins font-bold">
      <nav className="flex  gap-14 ">
        <Link
          to="/"
          className="mr-16 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="ml-[600px] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110"
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
      </nav>
    </div>
  );
};

export default NavBar;
