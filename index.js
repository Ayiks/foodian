import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './configs/db.js';

import {foodRoute} from './routes/foodRoutes.js';
import { createCategory } from './controllers/categoriesController.js';


connectMongoDB();
dotenv.config();

//create a new express instance
const app = express();
app.use(express.json());
app.use('/foods',foodRoute)
app.use('/categories',createCategory)

const port = process.env.PORT || 5006;

app.get('/', (req, res) => {
    console.log('Welcome to Foodian API')
})


//fetch all category
// app.get('/categories', getAllCategories )

// //create category
// app.post('/categories')

app.listen(port, () => console.log('Server is running💪'))