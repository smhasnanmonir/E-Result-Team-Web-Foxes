import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../components/HomePage/HomePage";
import InformationPage from "../pages/InformationPage/InformationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "information-page",
        element: <InformationPage></InformationPage>
      },
      {
        path: "result-page",
        element: <InformationPage></InformationPage>
      }
    ],
  },
]);
