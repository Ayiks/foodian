import express from "express";
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../controllers/categoriesController.js";

const route = express.Router();

route.route('/').get(getAllCategories).post(createCategory);
route.route('/:id').patch(updateCategory).delete(deleteCategory);

export const categoriesRoute = route;