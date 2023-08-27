import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from "./Provider/AuthProvider";
import { useContext } from 'react';
import Swal from "sweetalert2";


const Login = () => {
    const {signin, signInGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(errors);
        signin(data.Email, data.Password)
        .then((result) => {
            const user  = result.user;
            console.log(user);
            if(user){
                navigate('/');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Welcome ${user.displayName}`,
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
            
        })
    } 
    
 
    const handleGoogleSignin = () =>{
        signInGoogle()
        .then(result => {
            const loggedUser = result.user;
            if(loggedUser){
                const userData = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    photo: loggedUser.photoURL,
                    role: 'student'
                }
                fetch("http://localhost:5000/addUser", {
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
                        navigate('/');
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Welcome ${loggedUser.displayName}`,
                            showConfirmButton: false,
                            timer: 2000
                          })
                      }
                    });
                
            }      
            })
    }
    
    return (
        <div className="flex justify-center items-center py-[5%] px-[2%]">
             <form className="max-w-sm w-full text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <h1 className="text-3xl font-semibold text-center my-5">Login Now..!</h1>
                    <label className="label">
                        <span className="label-text font-semibold">*Enter Your Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered input-accent w-full" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />


                    <label className="label">
                        <span className="label-text font-semibold">*Enter Your Password</span>
                    </label>
                    <input type="password" placeholder="Password" {...register("Password", {required: true})} className="input input-bordered input-accent w-full " />

                    <div className="mt-4">
                        <p>New User? <Link to='/signup' className="font-semibold">Sign Up</Link> </p>
                       
                    </div>

                    <div className="text-center mt-[4%]">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                    <div className="divider">Or Sign in With</div>
                    <div className="flex justify-around items-center">
                        <div onClick={handleGoogleSignin} className=" btn btn-outline btn-info flex justify-center items-center">
                            <FcGoogle className="text-xl"></FcGoogle>
                            <button className="text-black font-semibold">Google</button>
                        </div>
                        <div className=" btn btn-outline btn-error flex justify-center items-center">
                            <FaGithub className="text-xl text-black"></FaGithub>
                            <button className="text-black font-semibold">GitHub</button>
                        </div>
                        
                    </div>
                </div>
                
             </form>
        </div>
    );
};

export default Login;