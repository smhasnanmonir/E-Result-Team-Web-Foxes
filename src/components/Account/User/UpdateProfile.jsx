import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import Lottie from 'lottie-react';
import ani from './update.json'
const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  
  return (
    <div>
      <div className='text-center'>
            <div className='divider'></div>
            <h1 className='text-3xl my-3'>Update Profile</h1>
            <div className='divider'></div>
            <div className='flex justify-center items-center gap-3'>
                <div>
                    <Lottie animationData={ani}></Lottie>
                </div>
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className='text-center'>
                        <div className='flex justify-center items-center gap-5'>
                            <div className="form-control w-full max-w-lg">
                                <label className="label">
                                    <span className="label-text font-semibold">Email (Can not be Change)</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs" type="email" value={user?.email} {...register("email",  {required:true})} />
                            </div>

                            <div className="form-control w-full max-w-lg">
                                <label className="label">
                                    <span className="label-text font-semibold">*Update Name</span>
                                </label>
                                <input className="input input-bordered w-full max-w-xs" type="text" placeholder="name" {...register("name", {})} />
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-5'>
                            <div className="form-control w-full max-w-lg">
                                    <label className="label">
                                        <span className="label-text font-semibold">*Age</span>
                                    </label>
                                    <input className="input input-bordered w-full max-w-xs" type="number" placeholder="age" {...register("age", {})} />
                            </div>

                            <div className="form-control w-full max-w-lg">
                                    <label className="label">
                                        <span className="label-text font-semibold">*Roll</span>
                                    </label>
                                    <input className="input input-bordered w-full max-w-xs" type="text" placeholder="roll" {...register} />
                            </div>
                        </div>

                        <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">*Address</span>
                                </label>
                                <textarea rows='5' className="input input-bordered w-full h-full " {...register("home", {})} />
                        </div>
                    </div>
                    <button className='btn bg-green-300 hover:bg-green-500 my-5' type="submit">Update</button>
                    </form>
            </div>
        </div>
    </div>
  );
};

export default UpdateProfile;