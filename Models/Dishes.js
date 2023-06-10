import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema({
  name: String,
  description: String,
  vegetarian: Boolean,
  image: String,
  price: Number,
  ingredients: String,
  available: Boolean,
  rating: Number,
});

export default mongoose.model("Dish", dishesSchema, "dishes");
