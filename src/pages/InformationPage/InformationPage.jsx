import { useState } from "react";
import { Link } from "react-router-dom";

const InformationPage = () => {
  const [rollNumber, setRollNumber] = useState();
  const studentInfo = (e) => {
    e.preventDefault();
    let idNumber = e.target.value;
    setRollNumber(idNumber);
  };
  console.log(rollNumber);
  return (
    <div className="font-poppins text-black">
      <div className="container lg:px-[250px] md:px-[150px] px-[25px] py-10 ">
        <div className="text-center rounded-t-xl bg-[#ACE9D7] ">
          <h1 className="text-md font-bold py-2">
            Welcome to Web Based Result Publication System
          </h1>
        </div>
        <div className=" flex justify-center w-full bg-[#F8F8F8]">
          <form className=" mt-10 px-4 ">
            <div className="mb-10 flex justify-between items-center gap-1">
              <label className="block font-medium">Examination :</label>
              <select
                name="examination"
                id="examination"
                className=" px-[15px] py-[8px] rounded-xl border border-black form-control text-center"
              >
                <option value="First term / Final">First term / Final</option>
                <option value="Midterm">Midterm</option>
                <option value="Final">Final</option>
              </select>
            </div>
            <div className="mb-10 flex justify-between items-center gap-1">
              <label className="block font-medium">Examination :</label>
              <select
                name="examination"
                id="examination"
                className=" px-[63px] py-[8px] rounded-xl border border-black form-control text-center"
              >
                <option value="First term / Final">2023</option>
                <option value="Midterm">2022</option>
                <option value="Final">2021</option>
              </select>
            </div>
            <div className="mb-10 flex justify-between items-center gap-1">
              <label className="block font-medium">ID Number :</label>
              <input
                onChange={studentInfo}
                type="number"
                name="idNumber"
                placeholder="Example: 22101517"
                id="idNumber"
                className=" py-[8px] rounded-xl border border-black placeholder-black form-control text-center"
              />
            </div>

            <Link to={`/result-page/${rollNumber}`}>
              <div className="flex justify-center mb-10">
                <button className=" bg-[#ACE9D7] hover:bg-[#03A373] text-black w-2/3 btn btn-primary rounded-md h-[35px]">
                  Show Result
                </button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
