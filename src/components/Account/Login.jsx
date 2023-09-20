import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "./Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import ani from "./login.json";
// import { io } from "socket.io-client";

const Login = () => {
  const { signin, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   const socket = io("https://e-result-server.vercel.app");
  //   console.log(socket);
  // }, []);
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    signin(data.Email, data.Password).then((result) => {
      const user = result.user;
      console.log(user);
      if (user) {
        navigate(from, { replace: true });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome ${user.displayName}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleGoogleSignin = () => {
    signInGoogle().then(async (result) => {
      const loggedUser = result.user;
      if (loggedUser) {
        const userData = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
          role: "student",
        };
        fetch("https://e-result-server.vercel.app/addUser", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //   console.log(data);
            if (data.insertedId || data.message) {
              navigate(from, { replace: true });
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Welcome ${loggedUser.displayName}`,
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3 py-3">
      <div className="flex justify-center items-center lg:py-[5%] px-[2%] md:w-1/2">
        <form
          className="max-w-sm w-full text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-[#f4976c] py-2">
              Login Now
            </h1>
            <label className="label">
              <span className="label-text font-semibold">
                *Enter Your Email
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-accent w-full"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <label className="label">
              <span className="label-text font-semibold">
                *Enter Your Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: true })}
              className="input input-bordered input-accent w-full "
            />

            <div className="mt-4">
              <p>
                New User?{" "}
                <Link to="/signup" className="font-semibold">
                  Sign Up
                </Link>{" "}
              </p>
            </div>

            <div className="text-center mt-[4%]">
              <button type="submit" className="my-btn">
                Login
              </button>
            </div>
            <div className="divider">Or Sign in With</div>
            <div className="flex justify-around items-center gap-2">
              <div
                onClick={handleGoogleSignin}
                className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center"
              >
                <FcGoogle className="text-xl"></FcGoogle>
                <button className="text-white font-semibold">Google</button>
              </div>
              <div className=" bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
                <FaGithub className="text-xl text-black"></FaGithub>
                <button className="text-black font-semibold">GitHub</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="md:w-1/2">
        <Lottie className="h-[400px] lg:h-[600px]" animationData={ani}></Lottie>
      </div>
    </div>
  );
};

export default Login;
