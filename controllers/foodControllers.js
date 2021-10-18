import { Food } from "../models/food.js";

//fetch all foods
const getAllFoods = async (req, res) => {
    try {
        const foodList = await Food.find({});
        return res.json(foodList)
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to fetch data', error)
    }
}

//fetch all foods by the category id
const getAllFoodsByCategory = async (req, res) => {
    try {
        const foodList = await Food.find({ category: req.params.categoryID });
        return res.json(foodList)
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to fetch data')
    }
}


// create a new food
const createFood = async (req, res) => {
    try {
        const newFood = await Food.create({ ...req.body });
        return res.json(newFood);
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to create data')
    }
}


//update a food
const updateFood = async (req, res) => {

    try {
        const { id } = req.params;
        const updatedFood = await Food.findByIdAndUpdate(id, { ...req.body }, { new: true });
        return res.json(updatedFood);
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to update data')
    }
}

// delete a food
const deleteFood = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedFood = await Food.findByIdAndDelete(id);
        return res.send('food was deleted')

    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to delete data')
    }
}

export {
    getAllFoods,
    getAllFoodsByCategory,
    createFood,
    updateFood,
    deleteFood
}
