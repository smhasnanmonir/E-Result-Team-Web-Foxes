
import useGetInfo from '../DataFetch/useGetInfo';
import './Dashboard.css'
import {BiSolidUserBadge,BiSolidDonateBlood,BiSolidPhoneCall} from 'react-icons/bi'
import {BsCalendar2Date,BsGenderAmbiguous,BsFillFileEarmarkSpreadsheetFill} from 'react-icons/bs'
import {MdMarkEmailRead} from 'react-icons/md'
import {FaMapLocationDot, FaUserGraduate, FaUserGear} from 'react-icons/fa6'
import {HiUserGroup} from 'react-icons/hi'
import {ImCheckboxChecked} from 'react-icons/im'
import {GiSandsOfTime} from 'react-icons/gi'
import {VscOpenPreview,VscPass} from 'react-icons/vsc'
import {RxCrossCircled} from 'react-icons/rx'
import useStats from '../DataFetch/useStats';
import { Link } from 'react-router-dom';
const AdminHome = () => {
    const [userInfo]= useGetInfo();
    const [getStats] = useStats();
    
    return (
        <div className="text-center p-2 bg-green-50">
            <div className="divider"></div>
            <h1 className="text-3xl font-semibold">Welcome, in Admin Dashboard</h1>
            <div className="divider"></div>
            <div className="flex flex-col md:flex-row md:items-left gap-5">
                <div className="md:w-2/5 admin-info flex flex-col justify-center items-center px-4 py-5 bg-green-300">
                    <h1 className='text-xl'>Admin Information</h1>
                    <div className="divider"></div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img className='h-[200px] rounded-full user-img' src={userInfo.photo} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='flex justify-left items-center gap-1'>
                                <BiSolidUserBadge className='text-blue-500'></BiSolidUserBadge>
                                <p> Name : <span className='font-semibold text-blue-800'>{userInfo.name ? userInfo.name : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                            </p>
                            <div className='flex flex-col justify-start items-start lg:flex-row lg:justify-start lg:items-center gap-3'>
                                <p className='flex justify-center items-center gap-[2px]'>
                                    <BsCalendar2Date className='text-blue-500'></BsCalendar2Date>
                                    <p> Age : <span className='font-semibold text-blue-900'>{userInfo.age ? userInfo.age : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                </p>
                                <p className='flex justify-center items-center gap-[2px]'>
                                    <BiSolidDonateBlood className='text-red-700'></BiSolidDonateBlood>
                                    <p> Blood : <span className='font-semibold text-blue-900'>{userInfo.blood ? userInfo.blood : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                </p>
                                <p className='flex justify-center items-center gap-[2px]'>
                                    <BsGenderAmbiguous className='text-green-600'></BsGenderAmbiguous>
                                    <p> Gender : <span className='font-semibold text-blue-900'>{userInfo.gender ? userInfo.gender : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                </p>
                            </div>
                            <div className='text-left'>
                                <p className='border-b-2 '>Contact Info</p>
                                <div className='flex flex-col gap-3 my-2'>
                                    <p className='flex justify-left items-center gap-[2px]'>
                                        <BiSolidPhoneCall className='text-blue-900'></BiSolidPhoneCall>
                                        <p> Phone : <span className='font-semibold text-blue-900'>{userInfo.phone ? userInfo.phone : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                    </p>
                                    <p className='flex justify-left items-center gap-[2px]'>
                                        <MdMarkEmailRead className='text-blue-900'></MdMarkEmailRead>
                                        <p> Email : <span className='font-semibold text-blue-900'>{userInfo.email ? userInfo.email : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                    </p>
                                    <p className='flex justify-left items-center gap-[2px]'>
                                        <FaMapLocationDot className='text-blue-900'></FaMapLocationDot>
                                        <p> Address : <span className='font-semibold text-blue-900'>{userInfo.address ? userInfo.address : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="md:w-3/5 admin-stats bg-green-300 px-4 py-5">
                    <h1 className='text-xl'>Web Stats</h1>
                    <div className='divider'></div>
                    <div className='flex flex-col justify-center items-left gap-5'>
                        <div className='grid md:grid-cols-3'>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <HiUserGroup className='text-3xl text-blue-700'></HiUserGroup>
                                <p className='font-semibold'>Total User</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.totaluser}</p>
                            </p>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <FaUserGear className='text-3xl text-blue-700'></FaUserGear>
                                <p className='font-semibold'>Admin</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.admin}</p>
                            </p>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <FaUserGraduate className='text-3xl text-blue-700'></FaUserGraduate>
                                <p className='font-semibold'>Students</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.students}</p>
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3'>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <VscOpenPreview className='text-3xl text-blue-700'></VscOpenPreview>
                                <p className='font-semibold'>Total Reviews</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.reviews}</p>
                            </p>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <GiSandsOfTime className='text-3xl text-blue-700'></GiSandsOfTime>
                                <p className='font-semibold'>Pending</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.pending}</p>
                            </p>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <ImCheckboxChecked className='text-3xl text-blue-700'></ImCheckboxChecked>
                                <p className='font-semibold'>Rechecked</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.rechecked}</p>
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3'>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <BsFillFileEarmarkSpreadsheetFill className='text-3xl text-blue-700'></BsFillFileEarmarkSpreadsheetFill>
                                <p className='font-semibold'>Total Result</p>
                                <p className='font-semibold text-2xl text-blue-900'>{getStats.totalResult}</p>
                            </p>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <VscPass className='text-3xl text-blue-700'></VscPass>
                                <p className='font-semibold'>Passing Rate</p>
                                <p className='font-semibold text-2xl text-blue-900'>100%</p>
                            </p>
                            <p className='stat-box border-2 rounded-md border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <RxCrossCircled className='text-3xl text-blue-700'></RxCrossCircled>
                                <p className='font-semibold'>Failed Rate</p>
                                <p className='font-semibold text-2xl text-blue-900'>0%</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;