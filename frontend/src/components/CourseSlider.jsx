import React from 'react'
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetAllCoursesQuery } from '../Redux/courseApiSlice'
import Slider from "react-slick"
const CourseSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const { data, error, isLoading, isError } = useGetAllCoursesQuery();
    if(isLoading)
    {
        return (<p>Loading...</p>
        )
    }
    let courses ;
    if(data)
    {
        courses = data.courses;
    }
    if(!courses)
    {
        return( 
        <div className='w-full h-screen text-white flex items-center justify-center bg-gray-900'>
        <h1 className='text-4xl -translate-y-96'>No Course Available</h1>
        </div>
        )
    }
    return (
        <div className='py-8 px-8 min-h-screen   bg-gray-900'>
            <h1 className='text-3xl font-bold text-white mb-6 text-center'>Courses</h1>
            <Slider {...settings}>
            {
                courses?.map((course,index)=>(
                    <div key={index} className='p-2'>
                    <Card lectures={course.lectures} title={course.title} thumbnail={`https://images.pexels.com/photos/18111570/pexels-photo-18111570/free-photo-of-illuminated-vintage-shop-sign-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/>
                    </div>
                ))
            }
            </Slider>
        </div>
    )
}
export default CourseSlider