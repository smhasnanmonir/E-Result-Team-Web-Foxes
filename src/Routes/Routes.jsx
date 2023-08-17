import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/Account/Login";
import Signup from "../components/Account/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
    ],
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
