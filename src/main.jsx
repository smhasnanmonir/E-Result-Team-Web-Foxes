import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/Account/Provider/AuthProvider";
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from "react-redux";
import store from "./components/DataFetch/Redux/store";


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className="mx-auto max-w-screen-2xl">
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
