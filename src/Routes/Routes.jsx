import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../components/HomePage/HomePage";
import InformationPage from "../pages/InformationPage/InformationPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import AddResult from "../pages/AddResult/AddResult";
import ViewAll from "../components/ViewAll/ViewAll";
import Login from "../components/Account/Login";
import Signup from "../components/Account/Signup";
import ReviewResults from "../pages/ReviewResults/ReviewResults";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../components/Dashboard/UserDashboard/UserDashboard";
import DifferDashboard from "../components/Dashboard/DifferDashboard";
import Admin from "./Admin";
import ManageUser from "../pages/ManageUser/ManageUser";
import EditResult2 from "../pages/UpdateResult/EditResult2/EditResult2";
import UpdateProfile from "../components/Account/User/UpdateProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "information-page",
        element: <InformationPage></InformationPage>,
      },
      {
        path: "result-page",
        element: <ResultPage></ResultPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/information-page",
        element: <InformationPage></InformationPage>,
      },
      {
        path: "/result-page/:idNumber",
        element: <ResultPage></ResultPage>,
      },
      {
        path: "updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "differdashboard",
        element: (
          <PrivateRoute>
            <DifferDashboard></DifferDashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "userdashboard",
            element: (
              <PrivateRoute>
                <UserDashboard></UserDashboard>
              </PrivateRoute>
            ),
          },
          {
            path: "addResult",
            element: (
              <Admin>
                <AddResult></AddResult>
              </Admin>
            ),
          },
          {
            path: "viewAll",
            element: (
              <Admin>
                <ViewAll></ViewAll>
              </Admin>
            ),
          },
          {
            path: "reviewResults",
            element: (
              <Admin>
                <ReviewResults></ReviewResults>
              </Admin>
            ),
          },
          {
            path: "editResult",
            element: (
              <Admin>
                <EditResult2></EditResult2>{" "}
              </Admin>
            ),
          },
          {
            path: "manageusers",
            element: (
              <Admin>
                <ManageUser></ManageUser>
              </Admin>
            ),
          },
        ],
      },
    ],
  },
]);
