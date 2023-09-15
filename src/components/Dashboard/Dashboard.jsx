import { Link, Outlet } from "react-router-dom";
import result from "../../assets/plus 1.png";
import review from "../../assets/reviews 1.png";
import edit from "../../assets/edit 1.png";
import manage from "../../assets/settings.png";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-success text-white my-7 lg:hidden w-[328px] mx-auto"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-green-50 text-base-content d-link">
            {/* Sidebar content here */}
            <li className="bg-green-200">
              <span>
                <img className="h-[45px]" src={result} alt="" />
                <Link to="addResult" className="text-[18px]">
                  Add Result
                </Link>
              </span>
            </li>
            <li>
              <span>
                <img className="h-[45px]" src={review} alt="" />
                <Link to={"reviewResults"} className="text-[18px]">
                  Review Result
                </Link>
              </span>
            </li>
            <li>
              <span>
                <img className="h-[45px]" src={edit} alt="" />
                <Link to={"editResult"} className="text-[18px]">
                  Edit Result
                </Link>
              </span>
            </li>
            <li>
              <span>
                <img className="h-[45px]" src={manage} alt="" />
                <Link to={"manageusers"} className="text-[18px]">
                  Manage User
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
