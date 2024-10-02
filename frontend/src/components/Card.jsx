import React from 'react'

const Card = ({ title, thumbnail, lectures }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 m-4 cursor-pointer">
            <div className='flex flex-col items-center'>
                <div className='w-full h-40 bg-gray-600 rounded-md mb-4'>
                    <img className="w-full h-40 bg-gray-600 rounded-md mb-4 object-cover" src={thumbnail} alt={title} />
                </div>
                <h2 className='text-xl font-semibold mb-2 text-center'>{title}</h2>
                <p>{lectures.length} Lessons</p>
            </div>
        </div>
    )
}
export default Card