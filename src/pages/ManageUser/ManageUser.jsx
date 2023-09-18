import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../components/DataFetch/useAxiosSecure";
import Table from "./Table";
import './ManageUser.css'


const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: userList = [], refetch} = useQuery(['userList'], async() => {
        const res = await axiosSecure.get('/userList')
        return res.data;
    })
    console.log(userList);
    return (
        <div className="px-5 py-5">
            <h1 className="font-semibold text-3xl text-center my-5"> Manage User</h1>
            <div className="divider"></div>
            <div className="overflow-x-auto rounded-lg table-sec">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="">
                        <tr className="bg-green-200 text-black border-2 border-green-200">
                            <th className="border-2 border-green-300"></th>
                            <th className="border-2 border-green-300">Photo</th>
                            <th className="border-2 border-green-300">Name</th>
                            <th className="border-2 border-green-300">Email</th>
                            <th className="border-2 border-green-300">Role</th>
                            <th className="border-2 border-green-300">Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            userList.map((user , index )=> <Table user={user} refetch={refetch} index={index} key={user._id}></Table>)
                        }

                        </tbody>
                        
                    </table>
                </div>
            
        </div>
    );
};

export default ManageUser;