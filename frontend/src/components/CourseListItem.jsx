import React from 'react'

const CourseListItem = ({title}) => {
  return (
    <div className='flex justify-between border-b-[1px] py-2 px-4'>
        <p className='text-xl'>{title} </p>
        <div className='flex gap-3'>
            <p className='bg-green-400 rounded-lg py-1 px-2 cursor-pointer'>Update</p>
            <p className='bg-red-400 rounded-lg py-1 px-2 cursor-pointer'>Delete</p>
        </div>
    </div>
  )
}
export default CourseListItem