import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddResult = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Submit the result",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Result has been submitted");
      }
    });
  };
  return (
    <div className=" w-[100%] lg:w-[70%] mx-auto md:px-0 px-[25px]">
      <div className=""></div>
      <div className="">
        <h1 className="bg-green-200 text-center py-4 my-10 rounded text-[20px]">
          Student Result Table
        </h1>
      </div>

      <div className="bg-green-200 lg:p-20 sm:p-2 rounded">
        <div className="bg-[#EAEAEA] pb-10 rounded-md overflow-x-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 text-center px-4 mx-auto "
          >
            <div className="mt-5">
              <p className="mr-2">Name</p>
              <input
                type="text"
                placeholder="name"
                className="w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("name", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">Term</p>
              <select
                className=" rounded-xl py-2 w-full  text-black text-center"
                {...register("Term")}
              >
                <option value="First" disabled>
                  Select
                </option>
                <option value="midTerm">MidTerm</option>
                <option value="finalTerm">FinalTerm</option>
              </select>
            </div>

            <div className="mt-5">
              <p className="mr-2">Section</p>
              <select
                className="  rounded-xl py-2 w-full  text-black text-center"
                {...register("Section")}
              >
                <option value="Section">Section</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
                <option value="3">6</option>
                <option value="3">7</option>
                <option value="3">8</option>
                <option value="3">9</option>
                <option value="3">10</option>
                <option value="3">11</option>
              </select>
            </div>

            <div className="mt-5">
              <p className="mr-2">Roll</p>
              <input
                type="number"
                placeholder="123456"
                className="w-full  text-center text-black placeholder-black  rounded-xl py-2"
                {...register("roll", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">Bangla</p>
              <input
                type="number"
                placeholder="80"
                className="w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("bangla", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">English</p>
              <input
                type="number"
                placeholder="80"
                className="w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("english", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">Math</p>
              <input
                type="number"
                placeholder="80"
                className="w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("math", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">Science</p>
              <input
                type="number"
                placeholder="80"
                className="w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("science", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">Physics</p>
              <input
                type="number"
                placeholder="80"
                className="w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("physics", { required: true })}
              />
            </div>

            <div className="mt-5">
              <p className="mr-2">Biology</p>
              <input
                type="number"
                placeholder="80"
                className=" w-full  text-center text-black placeholder-black   rounded-xl py-2"
                {...register("biology", { required: true })}
              />
            </div>

            <div className="mt-6 mx-auto text-center col-span-full">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-400 focus:outline-none"
                type="submit"
              >
                {" "}
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddResult;
