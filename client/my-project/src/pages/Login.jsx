import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/silices/authslice"; 
import  HomeLayout from '../Component/HomeLayout'

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [loginData,setloginData]=useState({
      gmail:"",
      password:"",
  })

  function handleUserInput(e){
     const {name,value}=e.target;
     setloginData({
      ...loginData,
      [name]:value
     })
  }

 async function onformSubmit(e) {
     e.preventDefault();
     console.log(loginData);
     if (!loginData.gmail || !loginData.password) {
        toast.error("fill all the fields");
     }
     const response=await dispatch(login(loginData));
     console.log(response);
     if(response?.payload?.data) {
      navigate('/');
  }
    setloginData({
        email: '',
        password: '',
      });
 }

  return (
    <HomeLayout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[60vh] bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Login
        </h1>
        <form onSubmit={onformSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="gmail"
              id="gmail"
              name="gmail"
              placeholder="Enter your email"
              value={loginData.gmail}
              onChange={handleUserInput} // Update email state
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleUserInput} // Update password state
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-800 font-medium hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
    </HomeLayout>
  );
};

export default Login;
