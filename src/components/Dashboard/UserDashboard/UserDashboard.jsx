import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Account/Provider/AuthProvider";
import useUserRecheck from "../../DataFetch/useUserRecheck";
import { FaHourglassHalf } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import ResultChart from "./ResultChart";
import DataFetch from "../../DataFetch/DataFetch";
import useUser from "../../DataFetch/useUser";
import { Link } from "react-router-dom";
import useGetInfo from "../../DataFetch/useGetInfo";
const UserDashboard = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [allData] = DataFetch();
  const [videoData, setVideoData] = useState([]);
  const [allUser] = useUser();
  const [userInfo] = useGetInfo();
  const { user, loading } = useContext(AuthContext);
  const [reCheckUser] = useUserRecheck();
  const userEmail = user?.email;
  const filteredStudent = allUser.find((data) => data.email == userEmail);
  const filteredStudentResult = allData.find(
    (data) => data.classId == filteredStudent?.roll
  );
  const finalTermValue = filteredStudentResult?.finalTerm;
  const midTermValue = filteredStudentResult?.midTerm;
  useEffect(() => {
    fetch("/subjectVideo.json")
      .then((res) => res.json())
      .then((data) => setVideoData(data));
  }, []);
  const arrayConvert = (termValue) => {
    const termArray = [];
    if (termValue) {
      for (let key in termValue) {
        let key1 = key.slice(0, 3).toUpperCase();
        termArray.push({ key1, value: termValue[key] });
      }
    }
    return termArray;
  };

  const arrayConvertForSub = (termValue) => {
    const termArray = [];
    if (termValue) {
      for (let key in termValue) {
        let key1 = key;
        termArray.push({ key1, value: termValue[key] });
      }
    }
    return termArray;
  };
  const finalConvertedArray = arrayConvert(finalTermValue);
  const midConvertedArray = arrayConvert(midTermValue);
  const finalConvertedArrayForSub = arrayConvertForSub(finalTermValue);

  const finalTotalValue = finalConvertedArray.reduce(
    (total, item) => total + item.value,
    0
  );

  const midTotalValue = midConvertedArray.reduce(
    (total, item) => total + item.value,
    0
  );

  const calculateComparison = (a, b) => {
    if (a > b) {
      return a - b;
    } else {
      return b - a;
    }
  };
  calculateComparison(finalTotalValue, midTotalValue);

  // show more student info
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="lg:px-[50px] px-[35px] md:mb-[15%] mb-[10%]">
      <div className="md:flex py-10 gap-10">
        <div className="md:w-1/3 mx-auto relative bg-[#feeba5]   shadow-xl md:px-2 px-[25px] py-8 rounded-[34px] md:h-[100%]">
          <div className="bg-green-600 z-0 md:ml-8  w-[15px] absolute top-[62px] -rotate-45 h-[5px]"></div>
          <h1 className="text-center md:ml-8  bg-green-500 text-white inline-block font-semibold text-[10px]   -rotate-3 px-2 w-[80px] h-[14px] my-5 ">
            Student Info
          </h1>

          {loading ? (
            <p>loading...</p>
          ) : (
            <div className="flex flex-col justify-center relative items-center gap-5">
              <img
                className="rounded-full border-[5px] absolute -top-16 right-2 border-white h-[90px]"
                src={user.photoURL}
                alt=""
              />
              <div className="flex flex-col justify-start gap-5 md:mr-6 mt-12">
                {/* name */}
                <h1 className="font-semibold ">
                  <span className=" bg-black font-normal text-xs text-white px-2  rounded-full">
                    Name
                  </span>
                  <br />
                  <div className="text-black bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                    {user.displayName || userInfo.name}
                  </div>
                </h1>
                {/* email */}
                <p className="font-semibold">
                  <span className=" bg-black font-normal text-xs text-white px-2  rounded-full">
                    Email
                  </span>
                  <br />
                  <div className="text-black bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                    {user.email}
                  </div>
                </p>
                {/* roll */}
                <div className="-mt-2">
                  { (
                    <p className="font-semibold">
                      <span className=" bg-black font-normal text-xs text-white px-2  rounded-full">
                        Roll
                      </span>

                      <div className="text-black text-sm bg-white px-2 mt-2 ml-2 inline-block rounded-full">
                        {userInfo?.roll ? userInfo?.roll  : <Link  to="/updateProfile">Update Now</Link>}
                      </div>
                    </p>
                  )}
                  {/* age */}
                  { (
                    <p className="font-semibold">
                      <span className=" bg-black font-normal text-xs text-white px-2   rounded-full">
                        Age
                      </span>

                      <div className="text-black text-sm bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                        {userInfo?.age ? userInfo?.age : <Link  to="/updateProfile">Update Now</Link>}
                      </div>
                    </p>
                  )}

                  {showInfo && (
                    <>
                      {/* gender */}
                      <p className="font-semibold">
                        <span className=" bg-black font-normal text-xs text-white px-2   rounded-full">
                          Gender
                        </span>

                        <div className="text-black text-sm bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                          {userInfo?.gender ? (
                            userInfo?.gender
                          ) : (
                            <Link  to="/updateProfile">Update Now</Link>
                          )}
                        </div>
                      </p>
                      {/* blood group */}
                      <p className="font-semibold">
                        <span className=" bg-black font-normal text-xs text-white px-2   rounded-full">
                          Blood Group
                        </span>

                        <div className="text-black text-sm bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                          {userInfo?.blood ? (
                            userInfo?.blood
                          ) : (
                            <Link  to="/updateProfile">Update Now</Link>
                          )}
                        </div>
                      </p>

                      {/* Phone  */}
                      {
                        <p className="font-semibold">
                          <span className=" bg-black font-normal text-xs text-white px-2   rounded-full">
                            Phone
                          </span>

                          <div className="text-black text-sm bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                            {userInfo?.phone ? (
                              userInfo?.phone
                            ) : (
                              <Link  to="/updateProfile">Update Now</Link>
                            )}
                          </div>
                        </p>
                      }
                      {/* Address */}
                      {  (
                        <p className="font-semibold">
                          <span className=" bg-black font-normal text-xs text-white px-2   rounded-full">
                            Address
                          </span>

                          <div className="text-black text-sm bg-white px-2 mt-4 ml-2 inline-block rounded-full">
                            {userInfo?.address ? userInfo?.address : <Link  to="/updateProfile">Update Now</Link>}
                          </div>
                        </p>
                      )}
                    </>
                  )}

                  <button
                    onClick={toggleInfo}
                    className="text-black text-sm font-semibold cursor-pointer  bg-white px-2 mt-4 inline-block rounded-full transition ease-in-out delay-75   hover:scale-110"
                  >
                    {showInfo ? "Less" : "More"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:w-2/3 p-[20px]  mx-auto lg:mt-0 mt-[25px] border-2 shadow-md shadow-gray-400 lg:px-2 py-8 rounded-md h-[100%]">
          <h1
            data-testid="listLength"
            className="text-center font-semibold text-2xl"
          >
            My Recheck List : {reCheckUser.length}
          </h1>
          <div className="divider"></div>
          <div className="grid grid-cols-1 gap-1">
            {reCheckUser.map((issue, index) => (
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
      <div>
        {filteredStudentResult == undefined ? (
          <div className="grid place-items-center space-y-5">
            <h1 className="text-2xl ">
              Your roll number is not in our data base. Please update your
              profile to get full experience of dashboard.
            </h1>
            <Link className="btn btn-outline" to="/updateProfile">
              Update Profile
            </Link>
          </div>
        ) : (
          <div>
            <div>
              <h1 className="text-2xl font-bold text-center py-[15px] bg-slate-200 mb-[20px]">
                Result Comparison
              </h1>
              <div className="grid place-items-center lg:grid-cols-2 grid-cols-1 lg:px-[110px] md:px-[70px] px-[35px]">
                <div>
                  <h1 className="text-xl font-semibold text-center">
                    Your Final term result
                  </h1>
                  <ResultChart data={finalConvertedArray}></ResultChart>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-center">
                    Your Mid term result
                  </h1>
                  <ResultChart data={midConvertedArray}></ResultChart>
                </div>
              </div>
              <div className="text-center space-y-[15px]">
                <h1 className="text-2xl font-semibold py-[10px] mb-[20px] bg-slate-200">
                  Your result analysis
                </h1>
                <h1 className="text-xl">
                  Your Final marks is:{" "}
                  <span className="font-semibold">{finalTotalValue}</span>
                </h1>
                <h1 className="text-xl">
                  Your Mid marks is:{" "}
                  <span className="font-semibold">{midTotalValue}</span>
                </h1>
                {finalTermValue < midTotalValue ? (
                  <div className="">
                    <h1 className="text-xl text-green-500">
                      Which is{" "}
                      <span className="font-semibold">
                        {calculateComparison(finalTotalValue, midTotalValue)}{" "}
                      </span>
                      marks than you scored in Midterms.
                    </h1>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-xl text-red-500">
                      Which is{" "}
                      <span className="font-semibold">
                        {calculateComparison(finalTotalValue, midTotalValue)}{" "}
                      </span>
                      marks less than you scored in Midterms.
                    </h1>
                  </div>
                )}
              </div>
              <div className="text-center space-y-[10px] py-5">
                <h1 className="text-2xl font-semibold py-[10px] mb-[20px] bg-slate-200">
                  Improve Yourself
                </h1>
                <div className="grid">
                  {finalConvertedArrayForSub?.map((sub) => (
                    <div key={sub.key1}>
                      <div className="py-2">
                        {sub.value < 80 && (
                          <div className="space-y-[15px] p-[45px] bg-fuchsia-100 rounded-md">
                            <h1 className="lg:text-2xl font-medium">
                              You have low marks in {sub.key1}
                            </h1>
                            <p className="md:text-xl text-red-500">
                              Please go through the playlist
                            </p>
                            <iframe
                              className="w-full md:h-[420px] h-[250px] mx-auto rounded-md border-none"
                              src={videoData[0]?.[sub.key1]}
                            ></iframe>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
