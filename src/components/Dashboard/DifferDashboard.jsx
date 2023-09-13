import useAdmin from "../DataFetch/useAdmin";
import Dashboard from "./Dashboard";
import UserDashboard from "./UserDashboard/UserDashboard";


const DifferDashboard = () => {
    const [checkAdmin] = useAdmin();
    console.log(checkAdmin)
    return (
        <div>
            {
            checkAdmin ?  <Dashboard/> : <UserDashboard/>
        }
        </div>
    );
};

export default DifferDashboard;