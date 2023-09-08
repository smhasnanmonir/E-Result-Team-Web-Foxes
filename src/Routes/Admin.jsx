import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Account/Provider/AuthProvider";
import useAdmin from "../components/DataFetch/useAdmin";



const Admin = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const [checkAdmin] = useAdmin();
    const location = useLocation();
    if(loading){
        <span className="loading loading-bars loading-lg"></span>
        return;
    }
    if(user && checkAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}}  replace></Navigate>
};

export default Admin;