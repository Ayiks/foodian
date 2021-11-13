import { categoryModel } from "../models/category.js";

//get all categories
const getAllCategories = async (req, res) => {
    try {
        const categoriesList = await categoryModel.find({});
        return res.json(categoriesList)
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to fetch data', error)
    }
}

//create new category
const createCategory = async (req, res) => {
    try {
        const newCategory = await categoryModel.create({ ...req.body });
        return res.json(newCategory);
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to create data')
    }
}


//update a category
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Food.findByIdAndUpdate(id, { ...req.body }, { new: true });
        return res.json(updatedCategory);
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to update data')
    }
}

//delete a category
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Food.findByIdAndDelete(id);
        return res.send('category was deleted')

    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to delete data')
    }
}

export {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
}
