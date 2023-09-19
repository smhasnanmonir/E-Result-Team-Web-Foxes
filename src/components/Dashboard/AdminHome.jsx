import useGetInfo from '../DataFetch/useGetInfo';
import './Dashboard.css'
import {BiSolidUserBadge,BiSolidDonateBlood,BiSolidPhoneCall} from 'react-icons/bi'
import {BsCalendar2Date,BsGenderAmbiguous,BsFillFileEarmarkSpreadsheetFill} from 'react-icons/bs'
import {MdMarkEmailRead} from 'react-icons/md'
import {FaMapLocationDot} from 'react-icons/fa6'
// import {HiUserGroup} from 'react-icons/hi'
// import {ImCheckboxChecked} from 'react-icons/im'
// import {GiSandsOfTime} from 'react-icons/gi'
// import {VscOpenPreview,VscPass} from 'react-icons/vsc'
// import {RxCrossCircled} from 'react-icons/rx'
import useStats from '../DataFetch/useStats';
import { Link } from 'react-router-dom';

import stu from './icons/group.png'
import us from './icons/crowd.png'
import ad from './icons/admin.png'
import revi from './icons/evaluation.png'
import rec from './icons/search.png'
import pen from './icons/deadline.png'

import tot from './icons/complaint.png'
import pas from './icons/pass.png'
import fai from './icons/fail.png'



const AdminHome = () => {
    const [userInfo]= useGetInfo();
    const [getStats] = useStats();
    
    return (
        <div className="text-center p-2 text-[#d2fdff]">
            <div className="divider"></div>
            <h1 className="text-3xl font-semibold my-text">Welcome, in Admin Dashboard</h1>
            <div className="divider"></div>
            <div className="flex flex-col md:flex-row md:items-left gap-5">
                <div className="md:w-2/5 admin-info flex flex-col justify-center items-center px-4 py-5 bg-[#303c6c]">
                    <h1 className='text-xl font-semibold text-[gold] border-[gold] border-b-2 pb-3 mb-5'>Admin Information</h1>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img className='h-[200px] rounded-full user-img' src={userInfo.photo} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='flex justify-left items-center gap-1'>
                                <BiSolidUserBadge className='text-[gold]'></BiSolidUserBadge>
                                <p> Name : <span className='font-semibold text-[gold]'>{userInfo.name ? userInfo.name : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                            </p>
                            <div className='flex flex-col justify-start items-start lg:flex-row lg:justify-start lg:items-center gap-3'>
                                <p className='flex justify-center items-center gap-[2px]'>
                                    <BsCalendar2Date className='text-[gold]'></BsCalendar2Date>
                                    <p> Age : <span className='font-semibold text-[#d2fdff]'>{userInfo.age ? userInfo.age : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                </p>
                                <p className='flex justify-center items-center gap-[2px]'>
                                    <BiSolidDonateBlood className='text-[gold]'></BiSolidDonateBlood>
                                    <p> Blood : <span className='font-semibold text-[#d2fdff]'>{userInfo.blood ? userInfo.blood : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                </p>
                                <p className='flex justify-center items-center gap-[2px]'>
                                    <BsGenderAmbiguous className='text-[gold]'></BsGenderAmbiguous>
                                    <p> Gender : <span className='font-semibold text-[#d2fdff]'>{userInfo.gender ? userInfo.gender : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                </p>
                            </div>
                            <div className='text-left'>
                                <p className='border-b-2 '>Contact Info</p>
                                <div className='flex flex-col gap-3 my-2'>
                                    <p className='flex justify-left items-center gap-[2px]'>
                                        <BiSolidPhoneCall className='text-[gold]'></BiSolidPhoneCall>
                                        <p> Phone : <span className='font-semibold text-[#d2fdff]'>{userInfo.phone ? userInfo.phone : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                    </p>
                                    <p className='flex justify-left items-center gap-[2px]'>
                                        <MdMarkEmailRead className='text-[gold]'></MdMarkEmailRead>
                                        <p> Email : <span className='font-semibold text-[#d2fdff]'>{userInfo.email ? userInfo.email : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                    </p>
                                    <p className='flex justify-left items-center gap-[2px]'>
                                        <FaMapLocationDot className='text-[gold]'></FaMapLocationDot>
                                        <p> Address : <span className='font-semibold text-[#d2fdff]'>{userInfo.address ? userInfo.address : <Link to='/updateProfile' className='text-sm text-red-600'>Update Profile</Link>} </span></p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="md:w-3/5 admin-stats flex flex-col justify-centter items-left bg-[#303c6c] px-4 py-5">
                    <h1 className='text-xl text-[gold] border-[gold] font-semibold border-b-2 pb-4 mb-5 mx-5'>Web Stats</h1>
                    
                    <div className='flex flex-col justify-center items-left gap-5'>
                        <div className='grid md:grid-cols-3 rounded-xl border-2 border-[gold]'>
                            <p className='stat-box border-r-2  border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                <img className='h-[50px]' src={us} alt="" />
                                {/* <HiUserGroup className='text-3xl text-blue-700'></HiUserGroup> */}
                                <p className='font-semibold'>Total User</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.totaluser}</p>
                            </p>
                            <p className='stat-box border-r-2  border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <FaUserGear className='text-3xl text-blue-700'></FaUserGear> */}
                                <img className='h-[50px]' src={ad} alt="" />
                                <p className='font-semibold'>Admin</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.admin}</p>
                            </p>
                            <p className='stat-box   border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <FaUserGraduate className='text-3xl text-blue-700'></FaUserGraduate> */}
                                <img className='h-[50px]' src={stu} alt="" />
                                <p className='font-semibold'>Students</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.students}</p>
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 rounded-xl border-2 border-[gold]'>
                            <p className='stat-box border-r-2  border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <VscOpenPreview className='text-3xl text-blue-700'></VscOpenPreview> */}
                                <img className='h-[50px]' src={tot} alt="" />
                                <p className='font-semibold'>Total Reviews</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.reviews}</p>
                            </p>
                            <p className='stat-box border-r-2  border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <GiSandsOfTime className='text-3xl text-blue-700'></GiSandsOfTime> */}
                                <img className='h-[50px]' src={pen} alt="" />
                                <p className='font-semibold'>Pending</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.pending}</p>
                            </p>
                            <p className='stat-box  flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <ImCheckboxChecked className='text-3xl text-blue-700'></ImCheckboxChecked> */}
                                <img className='h-[50px]' src={rec} alt="" />
                                <p className='font-semibold'>Rechecked</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.rechecked}</p>
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 rounded-xl border-2 border-[gold]'>
                            <p className='stat-box border-r-2  border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <BsFillFileEarmarkSpreadsheetFill className='text-3xl text-blue-700'></BsFillFileEarmarkSpreadsheetFill> */}
                                <img className='h-[50px]' src={revi} alt="" />
                                <p className='font-semibold'>Total Result</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>{getStats.totalResult}</p>
                            </p>
                            <p className='stat-box border-r-2 border-green-500 flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <VscPass className='text-3xl text-blue-700'></VscPass> */}
                                <img className='h-[50px]' src={pas} alt="" />
                                <p className='font-semibold'>Passing Rate</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>100%</p>
                            </p>
                            <p className='stat-box  flex flex-col justify-center items-center gap-1 p-2'>
                                {/* <RxCrossCircled className='text-3xl text-blue-700'></RxCrossCircled> */}
                                <img className='h-[50px]' src={fai} alt="" />
                                <p className='font-semibold'>Failed Rate</p>
                                <p className='font-semibold text-2xl text-[#d2fdff]'>0%</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;