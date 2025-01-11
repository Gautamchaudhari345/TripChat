import React from 'react';
import HomeLayout from '../Component/HomeLayout';

const Profile = () => {
  return (
    <HomeLayout>
      <div className="flex justify-center items-center min-h-[90vh] mb-4">
        <div className="bg-gray-950 mt-6 w-80 h-auto flex flex-col justify-center items-center shadow-lg rounded-md p-4">
          <h1 className="text-yellow-600 font-semibold text-2xl mb-4">User Profile</h1>
          <div className="text-white mb-2">Name: [User Name]</div>
          <div className="text-white mb-2">Email: [User Gmail]</div>
          <div className="text-white mb-4">Role: [User Role]</div>
          <div className="flex justify-center items-center flex-row gap-4">
            <button className="px-4 py-2 bg-yellow-500 text-black rounded-sm shadow-lg hover:bg-green-500">
              Update Profile
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-black rounded-sm shadow-lg hover:bg-red-500">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Profile;
