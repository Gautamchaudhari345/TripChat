import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URL || `mongodb+srv://gautamchaudhary9101:${process.env.MONGODBPASSWORD}@cluster0.hebxk.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB is connected:", connection.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the application if the database connection fails
  }
};

export default mongodbConnection;
