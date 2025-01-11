import React from 'react';
import HomeLayout from '../Component/HomeLayout';



const About = () => {
  return (
    <HomeLayout>
    
      <div className="pt-20 pb-10 text-center bg-gray-800 text-white">
        <h1 className="text-5xl font-semibold mb-6 animate__animated animate__fadeIn">
          About Us
        </h1>
        <p className="text-xl text-gray-300 mb-10 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to our travel and tourism platform, where we make your travel dreams come true!
        </p>
        
        <div className="w-full md:w-1/2 mx-auto space-y-8">
          {/* Company Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Company Overview</h2>
            <p className="text-lg text-gray-400">
              We are a dedicated team of travel enthusiasts passionate about helping people explore the world. Our platform offers a variety of tailored travel packages for solo travelers, couples, and families. With a focus on affordability and quality service, we aim to make every trip memorable.
            </p>
          </section>

          {/* Mission */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-lg text-gray-400">
              Our mission is to make travel more accessible, fun, and stress-free. We strive to provide you with the best travel experiences through handpicked destinations, expert guidance, and outstanding customer service. We want you to experience the world in the most memorable way possible.
            </p>
          </section>

          {/* Our Team */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Meet Our Team</h2>
            <p className="text-lg text-gray-400">
              Our team is a group of passionate travel experts who are here to help you every step of the way. From curating unique travel packages to providing personalized advice, we work hard to ensure that your travel experience is exceptional.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="w-32 h-32 rounded-full bg-gray-500 text-center flex items-center justify-center text-white">
                <p>John</p>
                <p className="text-sm">Founder</p>
              </div>
              <div className="w-32 h-32 rounded-full bg-gray-500 text-center flex items-center justify-center text-white">
                <p>Emily</p>
                <p className="text-sm">Travel Expert</p>
              </div>
              <div className="w-32 h-32 rounded-full bg-gray-500 text-center flex items-center justify-center text-white">
                <p>Mike</p>
                <p className="text-sm">Customer Support</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
            <p className="text-lg text-gray-400">
              We offer a range of benefits to make your travel experience seamless and enjoyable:
            </p>
            <ul className="text-lg text-gray-400 list-disc list-inside space-y-2">
              <li>Affordable Travel Packages</li>
              <li>24/7 Customer Support</li>
              <li>Handpicked Destinations</li>
              <li>Personalized Itineraries</li>
              <li>Expert Travel Guidance</li>
            </ul>
          </section>
        </div>
      </div>
      
    </HomeLayout>
  );
};

export default About;

