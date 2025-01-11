
import { useNavigate } from "react-router-dom"; 

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  if (!tour) {
    return <div className="text-center text-gray-500 font-medium">Loading...</div>;
  }

  return (
    <div
      className=" mb-6 tour-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer max-w-sm"
    >
      {/* Image */}
      <img
        src={tour?.imageCover || "default-image-url.jpg"}
        alt={tour?.title || "Tour image"}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800 truncate">
          {tour?.title || "No title available"}
        </h3>
        {/* <p className="text-gray-600 text-sm truncate">
          {tour?.description || "No description available"}
        </p> */}
        <p className="text-gray-500 text-sm">
          <strong>Location:</strong> {tour?.location || "Not available"}
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Price:</strong> ${tour?.price || "Not available"}
        </p>
        {/* <p className="text-gray-500 text-sm">
          <strong>Duration:</strong> {tour?.duration || "N/A"} days
        </p> */}
        {/* <p className="text-gray-500 text-sm">
          <strong>Max Group Size:</strong> {tour?.maxGroupSize || "N/A"}
        </p> */}
        <p className="text-gray-500 text-sm">
          <strong>Ratings:</strong> {tour?.ratingsAverage || "N/A"} ⭐
        </p>
        {/* <p className="text-gray-500 text-sm">
          <strong>Start Dates:</strong> {tour?.startDates ? tour.startDates.join(", ") : "N/A"}
        </p> */}
      </div>

      <div className="bg-gray-100 px-5 py-3  mb-4 text-center">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition duration-200"
          onClick={() => navigate(`/tours/discription`, { state: { ...tour } })}

        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default TourCard;
