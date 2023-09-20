import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import ani from "./update.json";
import useAxiosSecure from "../../DataFetch/useAxiosSecure";
import Swal from "sweetalert2";
import { MdMarkEmailRead, MdDriveFileRenameOutline } from "react-icons/md";
import { BsCalendarDate, BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { MdBloodtype } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const from = '/differdashboard';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axiosSecure.patch("/updateUser", data).then((res) => {
      if (res.data.matchedCount) {
        reset();
        navigate(from, { replace: true });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Profile Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        
      }
    });

  };
  console.log(errors);

  return (
    <div>
      <div className="text-center">
        <div className="divider"></div>
        <h1 className="text-3xl my-3">Update Profile</h1>
        <div className="divider"></div>
        <div className="flex flex-col lg:flex-row  justify-center items-center gap-3">
          <div>
            <Lottie animationData={ani}></Lottie>
          </div>
          <form
            className="flex flex-col justify-center items-center px-2 max-w-lg w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <MdMarkEmailRead className="text-lg text-blue-500"></MdMarkEmailRead>
                      <p>Email (Can not be Change)</p>
                    </span>
                  </label>
                  <input
                    className="input input-bordered border-green-400 w-full"
                    type="email"
                    value={user?.email}
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="form-control w-full ">
                  <label className="label flex">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <MdDriveFileRenameOutline className="text-lg text-blue-500"></MdDriveFileRenameOutline>
                      <p>Update Name</p>
                    </span>
                  </label>
                  <input
                    className="input input-bordered border-green-400 w-full "
                    type="text"
                    placeholder="Name"
                    {...register("name", {})}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <BsCalendarDate className="text-lg text-blue-500"></BsCalendarDate>
                      <p>Age</p>
                    </span>
                  </label>
                  <input
                    className="input input-bordered border-green-400 w-full "
                    type="number"
                    placeholder="Enter Age"
                    {...register("age", {})}
                  />
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <PiStudentFill className="text-lg text-blue-500"></PiStudentFill>
                      <p>Roll</p>
                    </span>
                  </label>
                  <input
                    className="input input-bordered border-green-400 w-full "
                    type="text"
                    placeholder="Class Roll"
                    {...register("roll", {})}
                  />
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <MdBloodtype className="text-lg text-red-500"></MdBloodtype>
                      <p>Blood Group</p>
                    </span>
                  </label>
                  <select
                    {...register("blood")}
                    className="select select-bordered border-green-400 w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select Group
                    </option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <BsFillTelephoneFill className="text-lg text-blue-500"></BsFillTelephoneFill>
                      <p>Phone</p>
                    </span>
                  </label>
                  <input
                    className="input input-bordered border-green-400 w-full "
                    type="number"
                    placeholder="Phone"
                    {...register("phone", {})}
                  />
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-semibold flex justify-center items-center gap-2">
                      <BiMaleFemale className="text-lg text-blue-500"></BiMaleFemale>
                      <p>Gender</p>
                    </span>
                  </label>
                  <select
                    {...register("gender")}
                    className="select select-bordered border-green-400 w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold flex justify-center items-center gap-2">
                    <FaAddressBook className="text-lg text-blue-500"></FaAddressBook>
                    <p>Address</p>
                  </span>
                </label>
                <textarea
                  rows="5"
                  className="input input-bordered border-green-400 w-full h-full "
                  placeholder="Type your address"
                  {...register("home", {})}
                />
              </div>
            </div>
            <button
              className="btn bg-green-300 hover:bg-green-500 my-5"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
