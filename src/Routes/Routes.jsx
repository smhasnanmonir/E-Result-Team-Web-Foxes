import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../components/HomePage/HomePage";
import InformationPage from "../pages/InformationPage/InformationPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import AddResult from "../pages/AddResult/AddResult";
import ViewAll from "../components/ViewAll/ViewAll";
import Login from "../components/Account/Login";
import Signup from "../components/Account/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import ReviewResults from "../pages/ReviewResults/ReviewResults";
import EditResult from "../pages/EditResult/EditResult";
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
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "addResult",
            element: <AddResult></AddResult>,
          },
          {
            path: "viewAll",
            element: <ViewAll></ViewAll>,
          },
          {
            path: "reviewResults",
            element: <ReviewResults></ReviewResults>,
          },
          {
            path: "editResult",
            element: <EditResult></EditResult>
          },
        ],
      },
    ],
  },
]);
