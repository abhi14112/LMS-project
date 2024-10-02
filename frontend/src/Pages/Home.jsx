import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseSlider from '../components/CourseSlider'
const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Navbar/>
            <Hero/>
            <CourseSlider/>
        </div>
    )
}
export default Home;