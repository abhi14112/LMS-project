import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import {useLogoutUserMutation} from "../Redux/userApiSlice"
const Sidebar = () => {
    const dispatch = useDispatch();
    const [logoutUser] = useLogoutUserMutation();
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser().unwrap();
        dispatch(logout());
        navigate("/login");
    }
    return (
        <div className='w-1/5 py-4 font-semibold shadow-lg h-auto  flex flex-col items-center gap-3'>
            <Link to="/admin">
                <p className='text-2xl cursor-pointer'>Admin Dashboard</p>
            </Link>
            <div className='text-black text-center w-[80%] flex flex-col gap-2 items-center'>
                <Link className='text-xl w-full bg-gray-200 hover:bg-gray-400  cursor-pointer rounded-lg px-6 py-1' to="/" >
                    <p>Home</p>
                </Link>
                <Link className='text-xl w-full bg-gray-200 hover:bg-gray-400  cursor-pointer rounded-lg px-6 py-1' to="/admin" >
                    <p >Courses</p>
                </Link>
                <p className='text-xl w-full bg-gray-200 hover:bg-gray-400  cursor-pointer rounded-lg px-6 py-1'>Analytics</p>
                <p className='text-xl w-full hover:bg-red-400 hover:text-white bg-gray-200   cursor-pointer rounded-lg px-6 py-1' onClick={handleLogout}>Logout</p>
            </div>
        </div>
    )
}
export default Sidebar;