import {Router} from 'express'
import { createTour, deleteTour, getAllTourByid, getAllTours, updateTour } from '../controlers/tour.controlers.js';
import isLogidin from '../middleware/auth.user.js';


const tourRouter=Router();

tourRouter.post('/create',isLogidin,createTour);
tourRouter.get('/get',getAllTours);
tourRouter.get('/:id',isLogidin,getAllTourByid);
tourRouter.put('/:id',isLogidin,updateTour);
tourRouter.delete('/:id',isLogidin,deleteTour);

export default tourRouter;