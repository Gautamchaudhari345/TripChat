import React, { useState } from 'react';
import HomeLayout from '../../Component/HomeLayout';
import axios from 'axios';

const CreateTour = () => {
  const [tourData, setTourData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    duration: '',
    maxGroupSize: '',
    ratingsAverage: '',
    startDates: '',
    imageCover: '',
    images: '',
  });

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourData({
      ...tourData,
      [name]: value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tours', tourData); // Replace with actual endpoint
      console.log('Tour Created:', response.data);
      alert('Tour created successfully');
    } catch (error) {
      console.error('Error creating tour:', error);
      alert('Failed to create tour');
    }
  };

  return (
    <HomeLayout>
      <div className="flex justify-center items-center min-h-screen bg-blue-600 py-10">
        <div className="bg-slate-900 min-h-[90vh] w-full sm:w-96 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">Create Tour</h2>

          <form onSubmit={handleSubmit} className="space-y-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={tourData.title}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter tour title"
                required
              />
            </div>

            {/* Description Field */}
            <div className="flex flex-col col-span-2">
              <label className="text-white text-sm mb-2">Description</label>
              <textarea
                name="description"
                value={tourData.description}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter tour description"
                rows="4"
                required
              />
            </div>

            {/* Location Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={tourData.location}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter tour location"
                required
              />
            </div>

            {/* Price Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={tourData.price}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter tour price"
                required
              />
            </div>

            {/* Duration Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Duration (in days)</label>
              <input
                type="number"
                name="duration"
                value={tourData.duration}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter tour duration"
                required
              />
            </div>

            {/* Max Group Size Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Max Group Size</label>
              <input
                type="number"
                name="maxGroupSize"
                value={tourData.maxGroupSize}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter max group size"
                required
              />
            </div>

            {/* Ratings Average Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Ratings Average</label>
              <input
                type="number"
                name="ratingsAverage"
                value={tourData.ratingsAverage}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                step="0.1"
                placeholder="Enter ratings average"
                required
              />
            </div>

            {/* Start Dates Field */}
            <div className="flex flex-col col-span-2">
              <label className="text-white text-sm mb-2">Start Dates (Comma Separated)</label>
              <input
                type="text"
                name="startDates"
                value={tourData.startDates}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter start dates"
                required
              />
            </div>

            {/* Image Cover Field */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Image Cover URL</label>
              <input
                type="text"
                name="imageCover"
                value={tourData.imageCover}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter cover image URL"
                required
              />
            </div>

            {/* Images URLs Field */}
            <div className="flex flex-col col-span-2">
              <label className="text-white text-sm mb-2">Images URLs (Comma Separated)</label>
              <input
                type="text"
                name="images"
                value={tourData.images}
                onChange={handleInputChange}
                className="p-3 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter image URLs"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6 col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Create Tour
              </button>
            </div>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateTour;
