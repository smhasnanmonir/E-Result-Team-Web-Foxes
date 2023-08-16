import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Dashboard from "../components/Dashborad/Dashboard";
import AddResult from "../components/AddResult/AddResult";
import ViewAll from "../components/ViewAll/ViewAll";
import Header from "../components/Header/Header";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <HomePage></HomePage>
//       },
//       {
//         path:'dashboard',
//         element:<Dashboard></Dashboard>,
//         children:[
//           {
//             path:'addResult',
//             element:<AddResult></AddResult>
//           },
//           {
//             path:'viewAll',
//             element:<ViewAll></ViewAll>
//           }

//         ]
//     },
//     ],
//   },
// ]);

// 
 

// 
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
]);