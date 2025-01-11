import User from "../models/user.schema.js";
import AppError from "../utils/app.error.js";

// Register User
const register = async (req, res, next) => {
  try {
    const { fullname, gmail, password } = req.body;

    if (!fullname || !gmail || !password) {
      return next(new AppError('All fields are required', 400));
    }

    const userExists = await User.findOne({ gmail });
    if (userExists) {
      return next(new AppError('user already exit', 400));
    }

    const user = await User.create({ fullname, gmail, password });

    const token = user.generateJWTToken();
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(201).json({
      success: true,
      message: 'User registration successful',
      user: {
        id: user._id,
        fullname: user.fullname,
        gmail: user.gmail,
      },
    });
  } catch (error) {
    console.error("Error in register:", error);
    return next(new AppError('somthing is wrong', 500));
  }
};


// User Login
const login = async (req, res, next) => {
  try {
    const { gmail, password } = req.body;

    if (!gmail || !password) {
      return next(new AppError('All fields are required', 400));
    }

    const user = await User.findOne({ gmail }).select('+password');
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    console.log("User Password: ", user.password);  
    console.log("Input Password: ", password);      

    // Compare input password with stored password
    if (!(await user.comparePassword(password))) {
      return next(new AppError("Incorrect password", 401));
    }

    const token = user.generateJWTToken();
    user.password = undefined;  // Remove password from response

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(200).json({
      success: true,
      message: 'User login successful',
      user: {
        id: user._id,
        gmail: user.gmail,
        role:user.role,
      },
    });
  } catch (error) {
    console.error("Error during login: ", error);
    return next(new AppError('Something went wrong', 500));
  }
};

// Update User Profile
const update = async (req, res, next) => {
  try {
    const { fullname, gmail, password } = req.body;

    if (!fullname || !gmail || !password) {
      return next(new AppError('All fields are required', 400));
    }

    const user = await User.findByIdAndUpdate(req.user.id, { fullname, gmail, password }, { new: true });

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      success: true,
      message: 'User profile updated successfully',
      user: {
        id: user._id,
        fullname: user.fullname,
        gmail: user.gmail,
      },
    });
  } catch (error) {
    console.error("Error during update: ", error);
    return next(new AppError('Something went wrong', 500));
  }
};

// Get User Profile
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const userId = req.params.id; // Likely code in your controller

    if (!user) {
      return next(new AppError('User not found', 404));
    }

    res.status(200).json({
      success: true,
      message: 'User details retrieved successfully',
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.gmail,
      },
    });
  } catch (error) {
    console.error("Error in getting profile: ", error);
    return next(new AppError('Something went wrong', 500));
  }
};

// Logout User
const logout = async (req, res, next) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(200).json({
      success: true,
      message: 'User logged out successfully',
    });
  } catch (error) {
    console.error("Error in logout: ", error);
    return next(new AppError('Something went wrong', 500));
  }
};

export {
  register,
  login,
  update,
  getProfile,
  logout,
};
