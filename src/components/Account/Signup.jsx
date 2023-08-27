import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;


const Signup = () => {
    const {createUser, updateUser, sendVerificationEmail} = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        console.log(data);
        console.log(errors);
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse =>{
                if(imageResponse.success){
                    const imgURL = imageResponse.data.display_url;
                    createUser(data.Email, data.Password)
                    .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser);
                        updateUser( data.Name, imgURL)
                        .then(() => {
                            // sendVerificationEmail();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Responded..! Check your email',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            reset();    
                            navigate('/login');
                        })
                        .catch(error => console.log(error));
                    })  
                }
            })
    };
    
    return (
        <div className="flex justify-center items-center py-[5%]">
            <form className="max-w-sm w-full text-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <h1 className="text-3xl font-semibold text-center my-5">Sign Up Now..!</h1>
                    <label className="label">
                        <span className="label-text font-semibold">*Enter Your Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered input-accent w-full" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />


                    <label className="label">
                        <span className="label-text font-semibold">*Choose Password</span>
                    </label>
                    <input type="password" placeholder="Password" {...register("Password", {required: true})} className="input input-bordered input-accent w-full " />

                    <label className="label">
                        <span className="label-text font-semibold">*Enter Your Name</span>
                    </label>
                    <input type="text" placeholder="Name" {...register("Name", {})}  className="input input-bordered input-accent w-full" />

                    <label className="label">
                        <span className="label-text font-semibold">*Choose Photo</span>
                    </label>
                    <input type="file" placeholder="image" {...register("image", {})} className="file-input file-input-bordered file-input-success w-full" />

                    <div className="text-center mt-[4%]">
                        <button type="submit" className="btn btn-accent">Sign Up</button>
                    </div>
                </div>
                
             </form>
        </div>
    );
};

export default Signup;