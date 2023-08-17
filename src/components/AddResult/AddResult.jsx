import "./AddResult.css";

const AddResult = () => {
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
                  <p>Name: Student Name</p>
                  <p>ID: Student ID</p>
                </div>
              </div>
              <div className="text-center bg-slate-300 p-5 text-[16px] rounded my-5">
                <p className="text-red-700">Result to json file</p>
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
              {/* row 1 */}
              <tr>
                <th>Demo Name</th>
                <td>Demo Id</td>
                <td>Result</td>
                <td>
                  <label htmlFor="my_modal_6">Edit button</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddResult;
