import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../redux/silices/authslice";
import { toast } from "react-hot-toast";
import HomeLayout from "../Component/HomeLayout";
//import { isEmail, isValidPassword } from "../helpher/regexMatcher";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    fullname: "",
    gmail: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const createNewAccount = async (e) => {
    e.preventDefault();
    const { fullname, gmail, password } = signupData;



    const response = await dispatch(
      createAccount({ fullname, gmail, password }) // Match backend field names
    );

    if (response.payload?.success) {
      navigate("/");
      toast.success("Account created successfully!");
      setSignupData({
        fullname: "",
        gmail: "",
        password: "",
      });
    } else {
      toast.error(response.payload?.message || "Account creation failed.");
    }
  };

  return (
    <HomeLayout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full sm:w-[80vw] md:w-[60vh] bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Sign Up
          </h1>
          <form className="space-y-6" onSubmit={createNewAccount}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname" // Match backend field name
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
                value={signupData.fullname} // Match state field name
                onChange={handleUserInput}
              />
            </div>

            <div>
              <label
                htmlFor="gmail"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="gmail"
                id="gmail"
                name="gmail"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
                value={signupData.email}
                onChange={handleUserInput}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
                value={signupData.password}
                onChange={handleUserInput}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-800 font-medium hover:underline"
              >
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Signup;
