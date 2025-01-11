import express from "express";
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import userTours from './routes/tour.routes.js';
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Remove trailing slash
  credentials: true, // Fix capitalization
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/tour', userTours);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

export default app;
