import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Component/HomeLayout";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStart } from "react-icons/md";
import { IoCalendarNumber, IoPerson } from "react-icons/io5";
import { FcRating } from "react-icons/fc";

const TourDescriptionPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const tour = state;

  if (!tour) {
    return (
      <HomeLayout>
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <p className="text-3xl font-semibold text-gray-300">
            No tour data found. Please try again.
          </p>
        </div>
      </HomeLayout>
    );
  }

  const handleBuyNow = () => {
    // Navigate to payment page with tour data
    navigate("/tour/payment", { state: { tour } });
  };

  return (
    <HomeLayout>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen p-10">
        {/* Title */}
        <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-10">
          {tour.title}
        </h1>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={tour.imageCover}
              alt={tour.title}
              className="rounded-2xl shadow-2xl hover:scale-105 transform transition duration-500 max-w-full md:max-w-md"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              {tour.description}
            </p>
            <p className="text-3xl font-bold text-yellow-400">
              Price: ${tour.price}
            </p>
            <div>
              <button
                onClick={handleBuyNow}
                className="bg-gradient-to-r from-yellow-500 to-green-500 shadow-lg text-3xl font-semibold rounded-lg px-8 py-4 hover:bg-green-600 hover:shadow-2xl transform transition-all ease-in-out duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 space-y-8">
          {/* Location */}
          <div className="flex items-center text-2xl space-x-4">
            <CiLocationOn className="text-yellow-500" />
            <span className="text-gray-300">
              Location:{" "}
              <span className="text-yellow-400 font-bold">
                {tour.location}
              </span>
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center text-2xl space-x-4">
            <IoCalendarNumber className="text-yellow-500" />
            <span className="text-gray-300">
              Total days for the tour:{" "}
              <span className="text-yellow-400 font-bold">
                {tour.duration} days
              </span>
            </span>
          </div>

          {/* Group Size */}
          <div className="flex items-center text-2xl space-x-4">
            <IoPerson className="text-yellow-500" />
            <span className="text-gray-300">
              Group size:{" "}
              <span className="text-yellow-400 font-bold">
                {tour.maxGroupSize} people
              </span>
            </span>
          </div>

          {/* Start Date */}
          <div className="flex items-center text-2xl space-x-4">
            <MdOutlineStart className="text-yellow-500" />
            <span className="text-gray-300">
              Starting date:{" "}
              <span className="text-yellow-400 font-bold">
                {tour.startDates}
              </span>
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center text-2xl space-x-4">
            <FcRating className="text-yellow-500" />
            <span className="text-gray-300">
              Rating:{" "}
              <span className="text-yellow-400 font-bold">
                {tour.ratingsAverage}
              </span>
            </span>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default TourDescriptionPage;
