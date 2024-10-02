import React from 'react'
import {useSelector} from "react-redux";
const Hero = () => {
    const  {userInfo} = useSelector((state)=>state.auth);
  return (
    <div className='py-4 px-4 md:py-12 md:px-16 w-screen h-max bg-gradient-to-r from-indigo-900 to-indigo-500 text-white'>
        <div className='md:text-xl font-semibold'>Hii, {userInfo?.name} </div>
        <div className='md:text-2xl font-semibold'>Welcome to Learn-X</div>
    </div>
  )
}
export default Hero