import React from 'react';
import HomeLayout from '../Component/HomeLayout';


const Contact = () => {
  return (
    <HomeLayout>
      
      <div className="min-h-screen bg-gray-950 flex items-center justify-center pt-20 md:pt-24"> {/* Added padding to space it below navbar */}
        <div className="container max-w-3xl mx-auto p-6 bg-gray-400 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Have any questions or need help? We'd love to hear from you!
          </p>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Contact;
