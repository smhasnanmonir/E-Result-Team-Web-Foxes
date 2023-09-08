import { useContext } from "react";
import { AuthContext } from "../../Account/Provider/AuthProvider";
import useUserRecheck from "../../DataFetch/useUserRecheck";
import { FaHourglassHalf } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";

const UserDashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [userRecheckAll] = useUserRecheck();
  // console.log(userRecheckAll);
  return (
    <div className="lg:px-[50px] px-[35px]">
      <div className="md:flex py-10 gap-10">
        <div className="md:w-1/3 mx-auto border-2 shadow-grey-300 shadow-md md:px-2 px-[25px] py-8 rounded-md md:h-[100%]">
          <h1 className="text-center font-semibold text-2xl my-5">
            Student Information
          </h1>
          <div className="divider"></div>
          {loading ? (
            <p>loading...</p>
          ) : (
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="rounded-full h-[150px]"
                src={user.photoURL}
                alt=""
              />
              <div className="flex flex-col justify-start gap-5 mt-2">
                <h1 className="font-semibold">
                  Name :{" "}
                  <span className="text-blue-700">{user.displayName}</span>
                </h1>
                <p className="font-semibold">
                  Email : <span className="text-blue-700">{user.email}</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="md:w-2/3 p-[20px]  mx-auto lg:mt-0 mt-[25px] border-2 shadow-md shadow-gray-400 lg:px-2 py-8 rounded-md h-[100%]">
          <h1 data-testid='listLength' className="text-center font-semibold text-2xl">
            My Recheck List : {userRecheckAll.length}
          </h1>
          <div className="divider"></div>
          <div className="grid grid-cols-1 gap-1">
            {userRecheckAll.map((issue, index) => (
              <div
                className="flex justify-between items-center px-4 py-5 border-[1.5px] shadow-sm shadow-red-400 rounded-md"
                key={issue._id}
              >
                <div className="flex justify-center items-center gap-3 ">
                  <p className="font-bold">{index + 1}</p>
                  <div className="divider divider-horizontal"></div>
                  <div>
                    <h1 className="font-semibold">
                      Roll :{" "}
                      <span className="text-red-600"> {issue?.classId}</span>
                    </h1>
                    <p className="font-semibold md:w-full w-[65px]">
                      Issue :{" "}
                      <span className="text-red-600 "> {issue?.message}</span>
                    </p>
                    <p className="font-semibold md:w-full w-[65px]">
                      Feedback :{" "}
                      <span className="text-red-600 "> {issue?.feedback}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">Status :</p>
                  {issue.rechecked == "No" ? (
                    <FaHourglassHalf className="text-2xl text-red-500"></FaHourglassHalf>
                  ) : (
                    <MdDoneOutline className="text-2xl text-green-500"></MdDoneOutline>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
