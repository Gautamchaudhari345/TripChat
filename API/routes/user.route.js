import {Router} from 'express'
import { getProfile, login, logout, register, update } from '../controlers/user.controlers.js';

const router=Router();

router.post('/register', register); // Create a tour
router.post('/login', login); // Get all tours
router.post("/logout", logout); // Delete a tour by ID
router.get("/:id", getProfile); // Get a single tour by ID
router.put("/:id", update); // Update a tour by ID


export default router;

