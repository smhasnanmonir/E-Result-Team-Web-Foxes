import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import InformationPage from "../pages/InformationPage/InformationPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import Dashboard from "../components/Dashborad/Dashboard";
import AddResult from "../components/AddResult/AddResult";
import ViewAll from "../components/ViewAll/ViewAll";
import Header from "../components/Header/Header";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children:[
      {
        path:'/',
        element: <HomePage></HomePage>
      },
  ,
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  },
      {
        path: "information-page",
        element: <InformationPage></InformationPage>
      },
      {
        path: "result-page",
        element: <ResultPage></ResultPage>
      }
    ],
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
]);