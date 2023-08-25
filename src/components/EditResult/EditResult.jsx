// import { useEffect, useState } from "react";
import "./EditResult.css";
// import DataFetch from "../DataFetch/DataFetch";
import { useEffect, useState } from "react";

const EditResult = () => {
  // const [allData] = DataFetch();
  const [newData,setNewData] = useState([]);
  console.log(newData)
  const [oneData,setOneData] = useState([]);
  console.log(oneData)
  useEffect(()=> {
    fetch("http://localhost:5000/allResults")
    .then((res) => res.json())
    .then((data) =>setNewData(data));
  },[])  
  const showEditResult = (id) => {
    fetch(`http://localhost:5000/allResults/${id}`)
    .then(res => res.json())
    .then(data =>setOneData(data))
}
  const [items] = [newData];
  const calculateGrade = (marks) => {
    if (marks >= 400) {
      return "A+";
    } else if (marks >= 350) {
      return "A";
    } else {
      return "B"; // You can add more conditions for other grades
    }
  };

  return (
    <div className="lg:w-[70%] mx-auto">
      <div className="">
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="">
              <div className="text-center bg-slate-300 p-5 text-[16px] rounded">
                <h1 className="mb-5">Editing Result of</h1>
                <div className="flex justify-between">
                  <p>Name: {oneData.Name}</p>
                  <p>ID: {oneData.classId}</p>
                </div>
              </div>
              <div className="text-center bg-slate-300 p-5 text-[16px] rounded my-5 grid grid-cols-3 gap-7">
              {oneData.result && Array.isArray(oneData.result) ? (
                      oneData.result.map(data => (
                        data?.finalTerm?.map(newData => <div  key={newData._id} className="rounded">
                          <p>{newData.subjectName}</p>
                          <p className="bg-red-400 rounded py-2">{newData.number}</p>
                          {/* <input type="text" placeholder={newData.number}/> */}
                        </div> )
                        // console.log(data?.finalTerm?.number)
                      ))
                    ) : (
                      <p className="text-red-700">Result Not Found</p>
                    )}
              </div>
            </div>
            <div className="modal-action">
              <button className="btn btn-outline btn-success">Save</button>
              <label htmlFor="my_modal_6" className="btn btn-outline btn-error">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <form className="f-form lg:flex lg:justify-between">
          <input
            type="search"
            name="search1"
            id="search1"
            placeholder="Search Box (Student ID)"
          />
          <input
            className="bg-red-200"
            type="search"
            name="search2"
            id="search2"
            placeholder="Search Button"
          />
        </form>
      </div>
      <div className="">
        <h1 className="bg-green-200 text-center py-4 my-10 rounded text-[20px]">
          Student Result Table
        </h1>
      </div>
      <div className="bg-green-200 lg:p-20 sm:p-2 rounded">
        <div className="overflow-x-auto">
          <table className="table table-zebra bg-green-100">
            {/* head */}
            <thead>
              <tr className="text-[18px] ">
                <th>Name</th>
                <th>ID</th>
                <th>Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                 {items.map((item, i) => (
                        <tr key={i}>
                    <th>{item.Name}</th>
                    <th>{item.classId}</th>
                    <th>{calculateGrade(item.result[0].midTerm.reduce(
                      (total, subject) => total + parseInt(subject.number),
                      0
                    ))}</th>
                     <th>
                       <label htmlFor="my_modal_6" onClick={()=>showEditResult(item._id)}>Edit</label>
                     </th>

                  </tr>
                ))}
                <th> 
               </th>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditResult;
