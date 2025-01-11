import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../helpher/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : {},
};
console.log("LocalStorage Role:", localStorage.getItem("role"));
console.log("LocalStorage Data:", localStorage.getItem("data"));

// Create Account Thunk
export const createAccount = createAsyncThunk("/signup", async (data) => {
  try {
    const promise = axiosInstance.post("user/register", data);
    toast.promise(promise, {
      loading: "Wait, creating your account...",
      success: (response) => response?.data?.message,
      error: "Failed to create your account",
    });
    const res = await promise;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    throw error;
  }
});

// Login Thunk
export const login = createAsyncThunk("user/login", async (data) => {
  try {
    const promise = axiosInstance.post("user/login", data);
    toast.promise(promise, {
      loading: "Logging in to your account...",
      success: (response) => response?.data?.message,
      error: "Failed to login",
    });
    const res = await promise;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    throw error;
  }
});

// Logout Thunk
export const logout = createAsyncThunk("/logout", async () => {
  try {
    const promise = axiosInstance.post("user/logout");
    toast.promise(promise, {
      loading: "Logging out...",
      success: (response) => response?.data?.message,
      error: "Failed to logout",
    });
    const res = await promise;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    throw error;
  }
});

// Update Profile Thunk
export const updateProfile = createAsyncThunk("/auth/update", async (data) => {
  try {
    const promise = axiosInstance.put(`user/update/${data[0]}`, data[1]);
    toast.promise(promise, {
      loading: "Updating user profile...",
      success: (response) => response?.data?.message,
      error: "Failed to update the data",
    });
    const res = await promise;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    throw error;
  }
});

// Get User Data Thunk
export const getUserData = createAsyncThunk("/user/details", async () => {
  try {
    const res = await axiosInstance.get("user/me");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
    throw error;
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = "";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if (!action?.payload?.user) return;
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      });
  },
});

export default authSlice.reducer;
