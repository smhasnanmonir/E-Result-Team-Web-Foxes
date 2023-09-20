import { useState } from "react";
import "./EditResult.css";
import Midtrim from "./MidTrim/MidTrim";
import FinalTrim from "./FinalTrim/FinalTrim";

const EditResult2 = () => {
  const [selectedTrim, setSelectedTrim] = useState("midtrim");

  const handleTrimChange = (event) => {
    setSelectedTrim(event.target.value);
  };
  return (
    <div className="lg:px-0 px-[25px]">
      {/* <div className="f-form lg:flex gap-5 md:w-[80%] mx-auto justify-center items-center">
        <input className="w-[80%] md:w-[50%] text-center"
          type="search"
          name="search1"
          id="search1"
          placeholder="Search Box(Name)"
        />
        <button className="btn btn-outline btn-accent">Search</button>
      </div> */}
      <div className="">
        <h1 className="bg-green-100 lg:w-[80%] text-center py-4 my-10 rounded text-[20px] mx-auto shadow-xl">
          Student Result Table
        </h1>
      </div>
      <div className="bg-green-100 py-10 rounded lg:w-[80%] lg:mx-auto shadow-xl">
        <div>
          <div className="ml-auto w-[200px]">
            <label htmlFor="trimSelect">Select Trim:</label>
            <select
              className="rounded"
              id="trimSelect"
              value={selectedTrim}
              onChange={handleTrimChange}
            >
              <option value="midtrim">Midtrim</option>
              <option value="finaltrim">Finaltrim</option>
            </select>
          </div>
          <div className="my-5">
            {selectedTrim === "midtrim" ? (
              <Midtrim></Midtrim>
            ) : (
              <FinalTrim></FinalTrim>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResult2;
