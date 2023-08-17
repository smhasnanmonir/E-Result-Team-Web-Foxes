import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/Account/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="mx-auto max-w-screen-2xl">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);


// test*************************
