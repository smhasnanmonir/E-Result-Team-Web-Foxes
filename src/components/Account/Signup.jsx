import { useForm } from "react-hook-form";

import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
import Lottie from "lottie-react";
import ani from './signup.json'


const Signup = () => {
    const {createUser, updateUser, sendVerificationEmail} = useContext(AuthContext);
    const [errorMessage, setError] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
    
    // console.log(errors)
    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        
        // console.log('clicked')
        // if(errors?.Roll.type == 'max'){
        //     setError('Max Length must be 4 number');
        // }
        // else if(errors?.Roll.type == 'min'){
        //     setError('Minimum length must be in 4 number')
        // }
        // else{
        //     setError('')
        // }
        const imgURL = 'https://i.ibb.co/3CKXX9n/IMG-20220826-191712-695.jpg'
        // const formData = new FormData();
        // console.log(data);
        // console.log(errors);
        // formData.append('image', data.image[0]);
        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imageResponse =>{
        //         if(imageResponse.success){
        //             const imgURL = imageResponse.data.display_url;
                    createUser(data.Email, data.Password)
                    .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser);
                        updateUser( data.Name, imgURL)
                        .then(() => {
                            const userData = {
                                name: data.Name,
                                email: data.Email,
                                photo: imgURL,
                                role: 'student',
                                roll : data.Roll
                            }
                            // sendVerificationEmail();  //Turned off because of development purpose , will turn on after development finished
                            fetch("https://e-result-server.vercel.app/addUser", {
                                method: "POST",
                                body: JSON.stringify(userData),
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              })
                                .then((res) => res.json())
                                .then((data) => {
                                  console.log(data);
                                  if (data.insertedId) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Responded..! Check your email',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                                  }
                                });
                            
                            reset();    
                            navigate('/');
                        })
                        .catch(error => console.log(error));
                    })  
            //     }
            // })
    };
    
    return (
       <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
         <div className="">
            <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
        </div>
         <div className="flex justify-center items-center lg:py-[5%]">
            <form className="max-w-sm w-full text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">Registration Now</h1>
                    {errors.Email && <p role="alert">*{errors.Email?.message}</p>}
                    {errors.Roll && <p role="alert">*{errors.Roll?.message}</p>}
                    {errors.Name && <p role="alert">*{errors.Name?.message}</p>}
                    <label className="label">
                        <span className="label-text font-semibold">*Enter Your Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered input-accent w-full" {...register("Email", {required: 'Email is Required', pattern: /^\S+@\S+$/i})} />


                    <label className="label">
                        <span className="label-text font-semibold">*Choose Password</span>
                    </label>
                    <input type="password" placeholder="Password" {...register("Password", {required: 'Password is Required'})} className="input input-bordered input-accent w-full " />


                    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">*Enter Your Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("Name", {required: 'Name is Required'})}  className="input input-bordered input-accent w-full" />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold">*Class Roll</span>
                                </label>
                                <input type="number" placeholder="Roll" {...register("Roll", {required: 'Roll Number is Required', maxLength: {value: 4, message: 'Enter Maximum 4 digit'}, minLength: {value: 3, message: 'Minimum 4 digit'}})}  className="input input-bordered input-accent w-full" />
                                
                            </div>
                        </div>

                   

                    <div className="text-center mt-[4%]">
                        <button type="submit" className="my-btn">Create</button>
                    </div>
                </div>
                
             </form>
        </div>
       
       </div>
    );
};

export default Signup;