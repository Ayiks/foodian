import mongoose from 'mongoose';

//extract these from the mongoose
const { Schema, model } = mongoose;

const foodSchema = Schema({
    image:String,
    food_name:String,
    price: Number,
    category: {type: Schema.Types.ObjectId, ref: 'categorycollection'},
    rating: Number,
    reviews_count: Number,
    ingredient: String,
    description: String
});

//use the schema to create a model
export const Food = model('foodCollection', foodSchema);
