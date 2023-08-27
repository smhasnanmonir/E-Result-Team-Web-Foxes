import { Outlet } from "react-router-dom";

import Footer from "../pages/Footer/Footer";
import Navbar from "../components/Nav/Navbar";

const Main = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
