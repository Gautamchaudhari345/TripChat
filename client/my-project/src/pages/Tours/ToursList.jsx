import { useEffect, useState } from "react";
import HomeLayout from "../../Component/HomeLayout";
import TourCard from "../../Component/TourCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllTour } from "../../redux/silices/tourSlice";

const ToursList = () => {
  const dispatch = useDispatch();
  const { tourList, isLoading, error } = useSelector((state) => state.tour);

  const [searchQuery, setSearchQuery] = useState("");

  // Load tours from Redux
  useEffect(() => {
    dispatch(getAllTour());
  }, [dispatch]);

  // Filter tours based on search query
  const filteredTours = tourList?.filter((tour) =>
    tour.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <HomeLayout>
      <div className=" mt-5 min-h-[90vh] pt-25 px-10 flex flex-col gap-10 text-white">
        {/* Page Heading */}
        <h1 className="text-center text-3xl font-semibold mb-5">
          Explore the Tours made by{" "}
          <span className="font-bold text-yellow-500">Tour Experts</span>
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search tours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-yellow-500 font-semibold">
            Loading tours...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 font-semibold">
            Error: {error}
          </div>
        )}

        {/* Tours List */}
        <div
          className={`grid ${
            filteredTours?.length > 0 ? "grid-cols-1 md:grid-cols-3" : ""
          } gap-14`}
        >
          {filteredTours?.length > 0 ? (
            filteredTours.map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))
          ) : (
            !isLoading && (
              <p className="text-center text-gray-400 font-medium">
                No tours found. Try searching with a different keyword.
              </p>
            )
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default ToursList;
