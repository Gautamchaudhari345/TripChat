import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import lake from '../assets/lake.jpg'; // Assuming this is the tourism-related image
import HomeLayout from '../Component/HomeLayout';


const HomePages = () => {
  return (
    <HomeLayout>
      
      <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center gap-10 mx-4 md:mx-16 h-[90vh]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-4xl md:text-5xl font-semibold animate__animated animate__fadeIn animate__delay-2s">
            Discover the Best
            <span className="text-yellow-500 font-bold"> Travel Destinations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 animate__animated animate__fadeIn animate__delay-3s">
            Explore exotic locations, breathtaking views, and unforgettable experiences at affordable prices. 
            Whether you're a solo traveler, couple, or family, we offer tailored travel packages for everyone.
          </p>

          <div className="space-x-6 animate__animated animate__fadeIn animate__delay-4s">
            <Link to="/tours">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Destinations
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex items-center justify-center animate__animated animate__fadeIn animate__delay-5s">
          <img
            alt="A beautiful lake view"
            src={lake}
            className="rounded-lg shadow-lg w-full max-w-lg"  // Ensuring the image scales well
          />
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="pt-20 pb-10 text-center bg-gray-800 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-6s">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl mb-8 animate__animated animate__fadeIn animate__delay-7s">
          We are committed to providing you with the best travel experiences. From personalized itineraries to 24/7 customer support, we ensure your trip is unforgettable.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="space-y-4 animate__animated animate__fadeIn animate__delay-8s">
            <h3 className="text-xl md:text-2xl font-semibold">Tailored Packages</h3>
            <p className="text-lg text-gray-400">Choose from a variety of packages designed for all types of travelers.</p>
          </div>
          <div className="space-y-4 animate__animated animate__fadeIn animate__delay-9s">
            <h3 className="text-xl md:text-2xl font-semibold">24/7 Support</h3>
            <p className="text-lg text-gray-400">Our customer service team is available anytime to assist you.</p>
          </div>
          <div className="space-y-4 animate__animated animate__fadeIn animate__delay-10s">
            <h3 className="text-xl md:text-2xl font-semibold">Affordable Prices</h3>
            <p className="text-lg text-gray-400">Get the best travel experiences without breaking the bank.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="pt-20 pb-10 bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 animate__animated animate__fadeIn animate__delay-11s">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3 space-y-4 animate__animated animate__fadeIn animate__delay-12s">
            <p className="text-lg text-gray-400">"Our family trip was perfect. The itinerary was so well organized, and we had a blast!"</p>
            <h4 className="font-semibold text-lg">John & Jane</h4>
            <p className="text-sm text-gray-500">Family Vacation</p>
          </div>
          <div className="w-full md:w-1/3 space-y-4 animate__animated animate__fadeIn animate__delay-13s">
            <p className="text-lg text-gray-400">"I had the best solo adventure with this company. Highly recommend it for solo travelers!"</p>
            <h4 className="font-semibold text-lg">Emily</h4>
            <p className="text-sm text-gray-500">Solo Traveler</p>
          </div>
          <div className="w-full md:w-1/3 space-y-4 animate__animated animate__fadeIn animate__delay-14s">
            <p className="text-lg text-gray-400">"A great experience from start to finish. Definitely booking again!"</p>
            <h4 className="font-semibold text-lg">Michael</h4>
            <p className="text-sm text-gray-500">Couple's Retreat</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePages;
