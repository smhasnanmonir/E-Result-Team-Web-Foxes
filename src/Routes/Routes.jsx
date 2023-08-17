import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Dashboard from "../components/Dashborad/Dashboard";
import AddResult from "../components/AddResult/AddResult";
import ViewAll from "../components/ViewAll/ViewAll";
import Header from "../components/Header/Header";
import Login from "../components/Account/Login";
import Signup from "../components/Account/Signup";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children:[
      {
        path:'/',
        element: <HomePage></HomePage>
      },
      {
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

          ]
      },
   ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  }
]);
