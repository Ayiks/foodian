import express from 'express';
import { createFood, deleteFood, getAllFoods, getAllFoodsByCategory, updateFood } from '../controllers/foodControllers.js';

const route = express.Router();


route.route('/').get(getAllFoods).post(createFood);
route.route('/:id').patch(updateFood).delete(deleteFood);
route.route('/categoryID').get(getAllFoodsByCategory);

// //fetch all foods
// route.get('/foods',getAllFoods)

// //fetch food by category
// route.get('/foods/:categoryID', getAllFoodsByCategory)

// //create a new food
// route.post('/foods', createFood)

// //update food
// route.patch('/foods/:id', updateFood)

// //delete food
// route.delete('/foods/:id', deleteFood)

export const foodRoute = route;
