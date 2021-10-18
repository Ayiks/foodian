import mongoose from 'mongoose';

//extract these from the mongoose
const { Schema, model } = mongoose;

const categorySchema = Schema({
    image:String,
    name:String,
    
});

//use the schema to create a model
export const categoryModel = model('categorycollection', categorySchema);
