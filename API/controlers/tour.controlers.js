import Tour from "../models/tour.schema.js";
import AppError from "../utils/app.error.js";


const createTour=async(req,res,next)=>{
    try {
        const {
          title,
          description,
          location,
          price,
          duration,
          maxGroupSize,
          ratingsAverage,
          startDates,
          imageCover,
          images,
          createdBy,
        } = req.body;
    
        const tour = await Tour.create({
          title,
          description,
          location,
          price,
          duration,
          maxGroupSize,
          ratingsAverage,
          startDates,
          imageCover,
          images,
          createdBy,
        });
    
        res.status(201).json({
          success: true,
          data: tour,
        });
      } catch (error) {
        next(new AppError(error.message || "Something went wrong", 500));
      }
};

const getAllTours=async(req,res,next)=>{
    try {
        
        const tours = await Tour.find();
    
        
        res.status(200).json({
          success: true,
          count: tours.length, 
          data: tours, 
        });
      } catch (error) {
        return next(new AppError("Failed to fetch tours", 500));
    }  
};


const getAllTourByid=async(req,res,next)=>{
   try {
      const {id}=req.prams;

      const tour=await Tour.findById(id);

      if (!tour) {
        return next (new AppError('Tour not find with this id'));
      }

      res.status(200).json({
        success:true,
        message:'fatching is completed',
        data:tour
      })

   } catch (error) {
    return next(new AppError('somthing went wrong',500))
   }
};

const updateTour=async(req,res,next)=>{
   try {
      const {id}=req.prams;
      const tour = await Tour.findByIdAndUpdate(id, req.body, {
        new: true, // Returns the updated document
        runValidators: true, // Ensure validation is run on update
      });

      if (!tour) {
        return next(new AppError("Tour not found with this ID", 404));
      }

      res.status(200).json({
        success:true,
        message:'udating data sucessfully',
        data:tour
      })
   } catch (error) {
      return next(new AppError('somthing is went wrong',500))
   }
}; 

const deleteTour=async(req,res,next)=>{
  try {
    const {id}= req.prams;

    const tour=await Tour.findByIdAndDelete(id);

    if (!tour) {
        return next (new AppError('toue is nit find by the id',500))
    }

    res.status(200).json({
        success:true,
        message:'sucessfully deleted tour',
        
    })
  } catch (error) {
    return next(new AppError('somthing went wrong',500))
  }
};

export{
    getAllTourByid,
    getAllTours,
    createTour,
    deleteTour,
    updateTour,
}