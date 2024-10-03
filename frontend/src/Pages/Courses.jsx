import React from 'react'
import CourseListItem from "../components/CourseListItem.jsx";
import { Link } from "react-router-dom"
import { useGetAllCoursesQuery } from '../Redux/courseApiSlice'

const Courses = () => {
  const { data, error, isLoading, isError } = useGetAllCoursesQuery();
  if (isLoading) {
    return (<p>Loading...</p>
    )
  }
  let courses;
  if(data)
  {
     courses  = data.courses;
  }
  return (
    <div className='py-12 px-12 w-full bg-slate-200'>
      <p className='text-2xl font-semibold mb-4'>Courses</p>
      <div>
        <div className=' rounded-lg bg-white px-4 py-4 '>
          <div className='flex justify-between mb-4'>
            <p className='font-semibold text-xl'>All courses</p>
            <Link to="/admin/create">
              <p className='font-semibold cursor-pointer bg-gray-800 hover:bg-gray-950 text-white rounded-lg px-2 py-1'>Create New Course</p>
            </Link>
          </div>
          <div className=''>
            <div className='flex border-b-[1px] border-gray-300 justify-between px-6 font-semibold text-gray-700'>
              <p className='text-xl'>Course</p>
              <p className='text-xl'>Action</p>
            </div>
            <div>

              {
                courses?.map((course, index) => (<CourseListItem key={index} title={course.title} />))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses