import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../components/HomePage/HomePage";
<<<<<<< HEAD
import InformationPage from "../pages/InformationPage/InformationPage";
import ResultPage from "../pages/ResultPage/ResultPage";
=======
import Dashboard from "../components/Dashborad/Dashboard";
>>>>>>> 5d82258ffef9dd05c892c10188994be6a4263d0e
import AddResult from "../components/AddResult/AddResult";
import ViewAll from "../components/ViewAll/ViewAll";
import Login from "../components/Account/Login";
import Signup from "../components/Account/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
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
<<<<<<< HEAD
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
        path: "/result-page",
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
        ],
      },
    ],
=======
          path:'dashboard',
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:'addResult',
              element:<AddResult></AddResult>
            },
            {
              path:'viewAll',
              element:<ViewAll></ViewAll>
            }

          ],
  {
    path: '/login',
    element: <Login></Login>
>>>>>>> 5d82258ffef9dd05c892c10188994be6a4263d0e
  },
]);
