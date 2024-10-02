import React, { useEffect, useState } from 'react';
import {useRegisterMutation} from "../Redux/userApiSlice.js";
import {setCredentials} from "../Redux/authSlice.js";
import {Toaster, toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signUp,{isLoadingRegister}] = useRegisterMutation();

    const {userInfo} = useSelector((state)=>state.auth);

    useEffect(()=>{
        if(userInfo){
            navigate("/");
        }
    },[navigate, userInfo]);
    const [userData, setUserData] = useState({
        email:"",
        name:"",
        password:""
    })
    const handleDataChange = (e)=>{
        const {name,value} = e.target;
        setUserData((prev)=>({...prev,[name]:value}));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await signUp(userData).unwrap();
            dispatch(setCredentials({...res}));
            toast.success("Signed Up Successfully")
            navigate('/');
        } catch (error) {
            toast.error(error.data.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <Toaster/>
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 text-white rounded-lg shadow-md">
                <h2 className="text-center text-3xl font-extrabold">Create Your Account</h2>
                <p className="text-center text-sm">
                    Already have an account?{' '}
                    <a href="/login" className="font-medium text-indigo-500 hover:underline">
                        Sign In
                    </a>
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">FullName</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={userData.fullname}
                                onChange={(e)=>handleDataChange(e)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 mb-4 placeholder-gray-400 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Fullname"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={userData.email}
                                onChange={handleDataChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 mb-4 placeholder-gray-400 text-white bg-gray-700  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={userData.password}
                                onChange={handleDataChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter a password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
                            disabled={!userData.email || !userData.password}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
