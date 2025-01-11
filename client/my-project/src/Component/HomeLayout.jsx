import React from 'react';
import Footer from './Footer';
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/silices/authslice';

const HomeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  
  
  // Function to change drawer width (if needed)
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = '80%'; // Adjust width as needed
  }

  // Function to hide the drawer
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    // Optionally reset drawer width
    changeWidth();
  }

  // Logout Function
  async function onLogout(e) {
    e.preventDefault();
    try {
      const response = await dispatch(logout());
      if (response?.payload?.data) {
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <div className="min-h-[90vh]">
      {/* Drawer for Sidebar */}
      <div className="drawer absolute left-0 z-10 w-fit">
        <input id="my-drawer" className="drawer-toggle" type="checkbox" />
        <div className="drawer-content">
          {/* Menu Button */}
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={'32px'}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            aria-label="close sidebar"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar Content */}
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size="24px" />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && role === "ADMIN" && (
              <>
                <li>
                  <Link to="/admin/dashboard">Admin Dashboard</Link>
                </li>
                <li>
                  <Link to="/tours/create">Create Tour</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/tours">Tour</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {!isLoggedIn ? (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/signin">Login</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/signup">Signup</Link>
                  </button>
                </div>
              </li>
            ) : (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/user/profile">Profile</Link>
                  </button>
                  <button
                    className="btn-secondary px-4 py-1 font-semibold rounded-md w-full"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
