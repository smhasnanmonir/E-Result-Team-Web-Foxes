const ViewAll = () => {
    return (
    <div className="w-[70%] mx-auto">
        <div className="">
           <form className='f-form lg:flex justify-between' action="">
                    <input  type="search" name="search1" id="search1" placeholder="Search Box (Student ID)"/>
                    <input className="bg-red-200" type="search" name="search2" id="search2" placeholder="Search Button"/>
           </form>
        </div>
        <div className="">
            <h1 className='bg-green-200 text-center py-4 my-10 rounded text-[20px]'>Student Result Table</h1>
        </div>
        <div className="bg-green-200 p-10 rounded">
            <div className="overflow-x-auto">
                <table className="table table-zebra bg-green-100">
                    {/* head */}
                    <thead>
                    <tr className='text-[18px] '>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>Demo Name</th>
                        <td>Demo Id</td>
                        <td>Result</td>
                    </tr> 
                    <tr>
                        <th>Demo Name</th>
                        <td>Demo Id</td>
                        <td>Result</td>
                    </tr>
                    <tr>
                        <th>Demo Name</th>
                        <td>Demo Id</td>
                        <td>Result</td>
                    </tr>
                    <tr>
                        <th>Demo Name</th>
                        <td>Demo Id</td>
                        <td>Result</td>
                    </tr> 
                    </tbody>
                </table>
            </div>
            <div className="mx-auto text-center mt-5">
                <button className="btn  sm:btn-sm md:btn-md mr-[20px]">Previous</button> 
                <button className="btn  sm:btn-sm md:btn-md">Next</button>
            </div>
        </div>
       
    </div>
    );
};

export default ViewAll;