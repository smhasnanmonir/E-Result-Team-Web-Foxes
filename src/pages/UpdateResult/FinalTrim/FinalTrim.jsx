import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FinalTrim = () => {
    const [editItem, setEditItem] = useState([]);
    const [oneData, setOneData] = useState([]);
    const { register, handleSubmit } = useForm();

  console.log(editItem)
    useEffect(() => {
      fetch(`http://localhost:5000/allResults`)
        .then((res) => res.json())
        .then((data) => setEditItem(data));
    }, []);
  
    const showEditResult = (id) => {
      fetch(`http://localhost:5000/allResults/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setOneData(data);
        });
    };
  
    console.log(oneData._id);
  
    const onSubmit = (data) => {
      Swal.fire({
        title: "Update the result",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const finalTerm = {
            Bangla: parseInt(data.Bangla),
            Biology: parseInt(data.Biology),
            Chemistry: parseInt(data.Chemistry),
            English: parseInt(data.English),
            Math: parseInt(data.Math),
            Physics: parseInt(data.Physics),
          };
  
          fetch(`http://localhost:5000/allResults/${oneData._id}?term=finalTerm`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalTerm),
          })
            .then((res) => res.json())
            .then((updatedResult) => {
              console.log(updatedResult);
              setOneData((prevOneData) => ({
                ...prevOneData,
                finalTerm: finalTerm,
              }));
              setEditItem((prevEditItems) =>
                prevEditItems.map((item) =>
                  item._id === oneData._id
                    ? { ...item, finalTerm: finalTerm }
                    : item
                )
              );
  
              Swal.fire("Result has been Update", "", "success");
            })
            .catch((error) => {
              console.error("Error updating data:", error);
              Swal.fire("Error updating data", "", "error");
            });
        }
      });
    };
  
    // Update the oneData state with the updated subject marks
  
    const calculateGrade = (marks) => {
      if (marks >= 350) {
        return "A+";
      } else if (marks >= 300) {
        return "A";
      } else if (marks >= 250) {
        return "A-";
      } else {
        return "B";
      }
    };
    return (
        <div className="lg:w-[80%] mx-auto">
        <div>
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="">
                <div className="text-center shadow-lg bg-green-100 p-5 text-[16px] rounded">
                  <h1 className="mb-5">Editing Result of:  FinalTrim</h1>
                  <div className="flex justify-between">
                    <p>Name: {oneData.Name}</p>
                    <p>ID:{oneData.classId}</p>
                  </div>
                </div>
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-center bg-green-100 shadow-xl p-5 text-[16px] rounded my-5 grid grid-cols-3 gap-7"
                  >
                    <div className="mt-5">
                      <p className="mr-2">Bangla</p>
                      <input
                        type="number"
                        defaultValue={oneData?.finalTerm?.Bangla}
                        className=" w-20 text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2"
                        {...register("Bangla")}
                      />
                    </div>
  
                    <div className="mt-5">
                      <p className="mr-2">Biology</p>
                      <input
                        type="number"
                        defaultValue={oneData?.finalTerm?.Biology}
                        className=" w-20 text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2"
                        {...register("Biology")}
                      />
                    </div>
  
                    <div className="mt-5">
                      <p className="mr-2">Chemistry</p>
                      <input
                        type="number"
                        defaultValue={oneData?.finalTerm?.Chemistry}
                        className=" w-20 text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2"
                        {...register("Chemistry")}
                      />
                    </div>
  
                    <div className="mt-5">
                      <p className="mr-2">English</p>
                      <input
                        type="number"
                        defaultValue={oneData?.finalTerm?.English}
                        className=" w-20 text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2"
                        {...register("English")}
                      />
                    </div>
  
                    <div className="mt-5">
                      <p className="mr-2">Math</p>
                      <input
                        type="number"
                        defaultValue={oneData?.finalTerm?.Math}
                        className=" w-20 text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2"
                        {...register("Math")}
                      />
                    </div>
  
                    <div className="mt-5">
                      <p className="mr-2">Physics</p>
                      <input
                        type="number"
                        defaultValue={oneData?.finalTerm?.Physics}
                        className=" w-20 text-center text-black placeholder-black hover:bg-[#ffffff]  rounded-xl py-2"
                        {...register("Physics")}
                      />
                    </div>
                    <div className="mt-6 mx-auto col-span-full">
                      <div className="modal-action">
                        <button
                          className="btn btn-outline btn-success"
                          type="submit"
                        >
                          Save
                        </button>
                        <label
                          htmlFor="my_modal_6"
                          className="btn btn-outline btn-error"
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="overflow-x-auto shadow-lg">
            <table className="table table-zebra bg-green-50">
              {/* head */}
              <thead>
                <tr className="text-[18px] ">
                  <th>Name</th>
                  <th>ID</th>
                  <th>Result</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="shadow-xl">
                {editItem.map((data, i) => (
                  <tr key={i}>
                    <th>{data.Name}</th>
                    <th>{data.classId}</th>
                    <th>
                        {calculateGrade(
                        data.finalTerm?.Bangla +
                        data.finalTerm?.Biology +
                        data.finalTerm?.Chemistry +
                        data.finalTerm?.English +
                        data.finalTerm?.Math +
                        data.finalTerm?.Physics
                        )}
                    </th>
                    <th>
                      <label
                        onClick={() => showEditResult(data?._id)}
                        htmlFor="my_modal_6"
                      >
                        Edit
                      </label>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> 
    );
};

export default FinalTrim;