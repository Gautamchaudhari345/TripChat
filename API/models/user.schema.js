import { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Define the user schema
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, 'Fullname is required'],
      minLength: [5, 'Name must be at least 5 characters'],
      maxLength: [50, 'Name must be at most 50 characters'],
      trim: true,
    },
    gmail: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [5, 'Password must be at least 5 characters'],
      trim: true,
    },
    role:{
      type:String,
      require:true,
      enum:['user','ADMIN'],
      default:'user',
    },
  },
  { timestamps: true }
);

// Hash password before saving it
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();  
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to generate JWT token
userSchema.methods.generateJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};

// Method to compare passwords
userSchema.methods.comparePassword = async function (plainTextPassword) {
  return bcrypt.compare(plainTextPassword, this.password);
};

// Export the model
const User = model('User', userSchema);

export default User;
