
import { useForm } from "react-hook-form"

const AddResult = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="lg:w-[70%] mx-auto">
      <div className="">
      </div>
      <div className="">
        <h1 className="bg-green-200 text-center py-4 my-10 rounded text-[20px]">
          Student Result Table
        </h1>
      </div>


      <div className="bg-green-200 lg:p-20 sm:p-2 rounded">
        <div className="bg-[#EAEAEA] pb-10 rounded-md overflow-x-auto">
          <form onSubmit={handleSubmit(onSubmit)} className='grid  grid-cols-3 gap-4 text-center px-4 mx-auto'>

            <div className='flex justify-center items-center mt-11'>
              <select className=" rounded-xl py-2 bg-[#f68080] hover:bg-[#ffffff] text-black w-full text-center" {...register("Term")}>
                <option value="First">FirstTerm</option>
                <option value="Mid">MidTerm</option>
                <option value="Final">FinalTerm</option>
              </select>
            </div>

            <div className='flex justify-center items-center mt-11'>
              <select className="  rounded-xl py-2 bg-[#f68080] text-black w-full text-center" {...register("Section")}>
                <option value="Section">Section</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="mt-5">
              <p className="mr-2">Roll</p>
              <input type='number' placeholder='123456' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff] rounded-xl py-2' {...register("roll", { required: true })} />
            </div>

            <div className="mt-5">
              <p className="mr-2">Bangla</p>
              <input type='number' placeholder='80' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2' {...register("bangla", { required: true })} />
            </div>

            <div className="mt-5">
              <p className="mr-2">English</p>
              <input type='number' placeholder='80' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2' {...register("english", { required: true })} />
            </div>

            <div className="mt-5">
              <p className="mr-2">Math</p>
              <input type='number' placeholder='80' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2' {...register("math", { required: true })} />
            </div>

            <div className="mt-5">
              <p className="mr-2">Science</p>
              <input type='number' placeholder='80' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2' {...register("science", { required: true })} />
            </div>

            <div className="mt-5">
              <p className="mr-2">Physics</p>
              <input type='number' placeholder='80' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2' {...register("physics", { required: true })} />
            </div>

            <div className="mt-5">
              <p className="mr-2">Biology</p>
              <input type='number' placeholder='80' className='bg-[#f68080] text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2' {...register("biology", { required: true })} />
            </div>

            <div className="mt-6 mx-auto col-span-full">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-400 focus:outline-none" type="submit"> submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddResult;