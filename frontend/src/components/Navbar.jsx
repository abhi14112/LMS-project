import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { GoBell } from "react-icons/go";
import { logout } from "../Redux/authSlice"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sideBarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const avatarButtonRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (avatarButtonRef.current.contains(event.target)) {
                setSidebarOpen((prev) => !prev);
                return;
            }
            if (sidebarRef.current &&
                !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }
    return (
        <>
            <div className='bg-gray-900 py-4 md:px-16 px-6 text-white h-max flex justify-between items-center'>
                <div className='flex gap-3 md:gap-12 items-center'>
                    <div>
                        <p className='text-xl md:text-3xl font-semibold'>Learn-X</p>
                    </div>
                    <div className='flex w-[200px] md:w-[400px] px-2 items-center border-gray-600 border rounded-md'>
                        <input
                            type="text"
                            className="appearance-none rounded-md text-xl relative block w-full md:py-2 py-1 bg-transparent outline-none placeholder-gray-400 text-white sm:text-sm"
                            placeholder="Search"
                        />
                        <FiSearch size={22} />
                    </div>
                </div>
                <div className=''>
                    <div
                        className='cursor-pointer md:hidden'
                        onClick={() => { setSidebarOpen((prev) => !prev) }}>
                        <FaBars size={18} />
                    </div>
                    <div className='hidden md:flex items-center gap-4 '>
                        <div className=''>
                            <GoBell color='white' size={24} />
                        </div>
                        <div ref={avatarButtonRef}
                            className='w-12 h-12 bg-indigo-500 rounded-full flex items-center cursor-pointer justify-center'
                        >
                            <p className='text-gray-900 font-semibold'>A</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={sidebarRef}
                className={`transition-transform duration-300 ease-in-out transform ${sideBarOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-full bg-zinc-900 text-white p-6 w-64 shadow-lg z-50`}>
                <ul className='flex flex-col gap-4 cursor-pointer text-lg'>
                    {
                        userInfo?.role === "admin" &&
                        <Link to={"/admin"}>
                            <li className='hover:bg-zinc-700 p-2 rounded-md'>
                                Admin Dashboard
                            </li>
                        </Link>
                    }
                    <li className='hover:bg-zinc-700 p-2 rounded-md'>Account</li>
                    <li className='hover:bg-zinc-700 p-2 rounded-md'>My Enrollments</li>
                    <li className='hover:bg-zinc-700 p-2 rounded-md'>Notifications</li>
                    <li className='hover:bg-zinc-700 p-2 rounded-md'>Favourites</li>
                    <li className='hover:bg-red-600 p-2 rounded-md' onClick={handleLogout}>Logout</li>
                </ul>
            </div>
            {sideBarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen((prev) => !prev)} />}
        </>
    );
};
export default Navbar;
