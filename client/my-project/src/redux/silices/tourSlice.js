import toast from "react-hot-toast";
import axiosInstance from "../../helpher/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tourList: [],
};

// Get All Tours Thunk
export const getAllTour = createAsyncThunk('/tours', async () => {
    try {
      const response = await axiosInstance.get('tour/get');
      console.log("API Response:", response.data); // Ensure the response is as expected
      return response.data?.data || []; // Ensure you're accessing the correct data
    } catch (error) {
      console.log("Error in fetching tours:", error); // Log error if it occurs
      toast.error('Tours fetch karna fail ho gaya');
      throw error; // Throw error so Redux can handle it
    }
  });
  
// Create New Tour Thunk
export const createNewTour = createAsyncThunk('tour/create', async (data, thunkAPI) => {
  try {
    const response = await axiosInstance.post('tour/create', data);
    toast.success("Tour created successfully!");
    return response.data; // Return the newly created tour
  } catch (error) {
    console.error("Error creating tour:", error);
    toast.error("Failed to create tour");
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong");
  }
});

// `createSlice` Implementation
const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Tours
    builder
      .addCase(getAllTour.pending, (state) => {
        state.isLoading = true;  // Set loading to true while fetching
        state.error = null;  // Clear any previous errors
      })
      .addCase(getAllTour.fulfilled, (state, action) => {
        console.log("Payload received:", action.payload);  // Payload ko check karo
        state.isLoading = false;
        state.tourList = action.payload; // tour list ko populate kar rahe hain
      })
      .addCase(getAllTour.rejected, (state, action) => {
        console.error("Error fetching tours:", action.error);
        state.isLoading = false;
        state.error = action.error.message;  // Set error message in state
        toast.error('Error fetching tours');
      });
  },
});

export default tourSlice.reducer;
