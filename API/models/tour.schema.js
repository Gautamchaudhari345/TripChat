import mongoose, { Schema, model } from "mongoose";

const tourSchema = new Schema(
  {
    title: {
      type: String, 
      required: [true, "Please provide the title of the tour"], 
    },
    description: {
      type: String, 
      required: [true, "Please provide the description of the tour"],
    },
    location: {
      type: String,
      required: [true, "Please specify the location of the tour"],
    },
    price: {
      type: Number,
      required: [true, "Please provide the price of the tour"], 
      min: [0, "Price must be greater than or equal to 0"], 
    },
    duration: {
      type: String, 
      required: [true, "Please specify the duration of the tour"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "Please specify the maximum group size"],
      min: [1, "Group size must be at least 1"],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    startDates: {
      type: [Date], 
    },
    imageCover: {
      type: String, 
      required: [true, "Please provide a cover image for the tour"],
    },
    images: {
      type: [String], 
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please specify the creator of the tour"],
    },
  },
  {
    timestamps: true, 
  }
);

const Tour = model("Tour", tourSchema);

export default Tour;
