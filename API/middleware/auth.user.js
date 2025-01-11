import AppError from "../utils/app.error.js";
import JWT from 'jsonwebtoken'

const isLogidin = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new appError('Unauthenticated, please login again', 400));
    }
  
    try {
      const userDetail = await jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded User Detail:", userDetail);  // Check the decoded token
  
      // Explicitly set req.user with the id and other details
      req.user = {
        id: userDetail.id,  // Ensure this is set
        email: userDetail.email,
        role: userDetail.role
      };
      
      next();
    } catch (error) {
      return next(new appError('Invalid or expired token', 400));
    }
  };

  export default isLogidin;