import {BsFillTrash3Fill} from 'react-icons/bs'
import useAxiosSecure from '../../components/DataFetch/useAxiosSecure';
import Swal from 'sweetalert2';
import './ManageUser.css'

const Table = ({user, index, refetch}) => {
    const {name, email, photo} = user;
    const [axiosSecure]= useAxiosSecure();
    const handleDelete = user =>{
        console.log(user)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this user",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteUser/${user._id}`)
                .then(data =>{
                    console.log(data)
                    if(data.data.deletedCount){
                                        refetch();
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: `${user.name} Removed`,
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }
                })
            }
          });
    };

    const handleMakeAdmin = user =>{
        console.log(user)
        let dataBody = {
            to: user.email,
            notify : 'You added as admin'
          };
        Swal.fire({
            title: 'Are you sure?',
            text: "Set to make admin",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Do it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/userList/admin/${user._id}`, dataBody)
                .then(data=>{
                    console.log(data)
                    if(data.data.result.modifiedCount){
                                        console.log(data)
                                        refetch();
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: `${user.name} added as admin`,
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }
                })
            }
          });
        }

    return (
        <tr className='bg-green-100 border-2 border-green-200'>
        <td >
        <label>
            <p className='font-semibold text-sm md:text-base'>{index+1}</p>
        </label>
        </td>
        <td className='hide-fixed-items'>
            <img className="pp md:h-[80px]  md:w-[80px]  rounded-full border-2 border-green-600" src={photo} alt="" />
        </td>
        <td >
        <div className="flex flex-col items-left">
        <img className="pp h-[50px] w-[50px] md:hidden rounded-full border-2 border-green-600" src={photo} alt="" />
            <p className='font-semibold'>{name}</p>
            <p className=' md:hidden'>{email}</p>
        </div>
        </td>
        <td className='hide-fixed-items'>
        <p className='text-sm md:text-base '>{email}</p>
        </td>
        <td className="fixed-item">
            {
                user.role === 'admin' ? <div className="badge badge-accent">Admin</div> : user.role === 'student'? <button onClick={() => handleMakeAdmin(user)} className="badge badge-success">Student</button> : <div className="badge badge-accent">Instructor</div>
            }
            <button onClick={() => handleDelete(user)} className="my-btn md:hidden"><BsFillTrash3Fill className='text-3xl text-black'></BsFillTrash3Fill></button>
        </td>
        <td className='hide-fixed-items'>
        <button onClick={() => handleDelete(user)} className="hide-fixed-items my-btn"><BsFillTrash3Fill className='text-3xl text-blue-900'></BsFillTrash3Fill></button>
        </td>
    </tr>
    );
};

export default Table;