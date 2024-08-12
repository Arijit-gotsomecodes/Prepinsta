const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  food_item_name: {
    type: String,
    required: true,
  },

  food_group: String,
  description: String,
  ingredients: [String],
  serving_size: String,
  certifications: [String],
  health_benefits: [String],
  country_of_origin: String,
  preparation_methods: [String],
  dietary_restrictions: [String],
  brand_or_manufacturer: String,
  nutritional_information: {
    fat: Number,
    fiber: Number,
    protein: Number,
    calories: Number,
    carbohydrates: Number,
  },
  allergens: [String],
});

const food = new mongoose.model("Food", foodSchema);
module.exports = food;
