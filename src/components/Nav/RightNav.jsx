import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Account/Provider/AuthProvider";
import { LuSettings2 } from "react-icons/lu";
import { BiSolidUserCheck } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import useNotify from "../DataFetch/useNotify";
import useAxiosSecure from "../DataFetch/useAxiosSecure";
import useAdmin from "../DataFetch/useAdmin";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: start;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 50vh;
    width: 300px;
    padding: 2.5rem;
    color: white;
    transition: transform 0.3s ease-in-out;

    li {
      background-color : black;
      color: gold;
      padding: 10px 5px;
      
    }
  }
`;

const RightNav = ({ open }) => {
  const {user,logOut} = useContext(AuthContext);
  const [notifications, refetch] = useNotify();
  const [checkAdmin]  = useAdmin()
  const [axiosSecure] = useAxiosSecure();
  // console.log(notifications)
  const logout = () => {
    logOut();
  };

  const handleClear = () =>{
            axiosSecure.delete(`/clearnoti?email=${user.email}`)
                .then(data =>{
                    console.log(data)
                    if(data.data.deletedCount){
                                        refetch();
                                    }
                })
  }
  return (
    <>
      <div className="z-10">
        <Ul className="flex justify-center items-center gap-5 md:gap-2 lg:gap-3" open={open}>
          <Link to="/" className="me-5 font-bold ">
            Home
          </Link>
          <Link to="/contact" className="me-5 font-bold ">
            Contact
          </Link>
          <Link to={checkAdmin? '/differdashboard/home' : '/differdashboard'} className="me-10 font-bold ">
            Dashboard
          </Link>
          {/* {user ? (
              <div className="dropdown">
                <label tabIndex={0} className="flex justify-center">
                  <img
                    className="rounded-full border-4 border-green-400 h-[50px]"
                    src={user.photoURL}
                    alt=""
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] text-black menu p-2 shadow bg-blue-800 rounded-box w-52"
                >
                  <li className="text-black">
                    <Link to="/updateProfile">
                      <LuSettings2 className="text-xl"></LuSettings2>Update
                      Profile{" "}
                    </Link>
                  </li>
                  <li className="text-black">
                    <p>
                      <BiSolidUserCheck className="text-xl"></BiSolidUserCheck>
                      {user.displayName}
                    </p>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
            {user ? (
              <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className=" m-1 relative">
                <MdNotificationsActive className="text-5xl text-blue-500 p-1 border-2 rounded-full border-green-500"></MdNotificationsActive>
                <div className="badge badge-accent badge-md p-1 rounded-full  text-center  absolute top-4 left-7">{notifications.length}</div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                {
                  notifications.map(noti=>
                    <li className="bg-slate-300" key={noti._id}>
                      <Link to='/differdashboard'><SiGooglemessages></SiGooglemessages> {noti.notify}</Link>
                      
                    </li>
                  ) 
                  
                }
                {
                  notifications.length == 0 ? <button className="btn">No Notifications</button> : <button onClick={handleClear} className="btn">Clear</button>
                }
              </ul>
            </div>
              
            ) : ''}
            {user ? (
              <Link onClick={logout} className="btn btn-error">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="btn btn-success">
                Login
              </Link>
            )} */}
            {
              user? 
              <div className="flex md:flex-row justify-center items-center gap-3">
                <div className="dropdown">
                <label tabIndex={0} className="flex justify-center">
                  <img
                    className="rounded-full border-4 border-green-400 h-[50px]"
                    src={user.photoURL}
                    alt=""
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] text-black menu p-2 shadow bg-blue-800 rounded-box w-52"
                >
                  <li className="text-black">
                    <Link to="/updateProfile">
                      <LuSettings2 className="text-xl"></LuSettings2>Update
                      Profile{" "}
                    </Link>
                  </li>
                  <li className="text-black">
                    <p>
                      <BiSolidUserCheck className="text-xl"></BiSolidUserCheck>
                      {user.displayName}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className=" m-1 relative">
                <MdNotificationsActive className="text-5xl text-blue-500 p-1 border-2 rounded-full border-green-500"></MdNotificationsActive>
                <div className="badge badge-accent badge-md p-1 rounded-full  text-center  absolute top-4 left-7">{notifications.length}</div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                {
                  notifications.map(noti=>
                    <li className="bg-slate-300" key={noti._id}>
                      <Link to='/differdashboard'><SiGooglemessages></SiGooglemessages> {noti.notify}</Link>
                      
                    </li>
                  ) 
                  
                }
                {
                  notifications.length == 0 ? <button className="my-btn">No Notifications</button> : <button onClick={handleClear} className="btn">Clear</button>
                }
              </ul>
            </div>
            <Link onClick={logout} className="my-btn">
                Logout
            </Link>
              </div> :
              <Link to="/login" className="my-btn">
              Login
            </Link>
            }
        </Ul>
      </div>
    </>
  );
};

export default RightNav;
