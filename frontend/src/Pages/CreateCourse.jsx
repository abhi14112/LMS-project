import React, { useState } from 'react';
import { useCreateCourseMutation } from "../Redux/courseApiSlice";
import { useNavigate } from 'react-router-dom';
const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });
  const [thumbnail, setThumbnail] = useState("");
  const [createCourse, { isLoading, isError, isSuccess }] = useCreateCourseMutation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!formData.title || !formData.description || !formData.category) {
      setMessage('All fields are required.');
      return;
    }
    try {
      await createCourse(formData).unwrap();
      setMessage('Course created successfully!');
      navigate('/admin');
    } catch (error) {
      console.log("Error ", error);
      setMessage('Failed to create the course. Please try again.');
    }
  };
  return (
    <div className="w-full px-12 md:px-24 mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Course</h2>
      {message && <p className="mb-2 text-center text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course title"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Course Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course description"
            rows="4"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
            Course Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div>
          <label htmlFor="thumbnail" className="block text-gray-700 font-semibold mb-2">
            Course Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter thumbnail URL"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLoading ? 'bg-gray-400' : 'bg-gray-700 hover:bg-gray-900'
              }`}
          >
            {isLoading ? 'Creating Course...' : 'Create Course'}
          </button>
        </div>

        {isError && <p className="text-red-500">Error creating course.</p>}
        {isSuccess && <p className="text-green-500">Course created successfully!</p>}
      </form>
    </div>
  );
};

export default CreateCourse;
