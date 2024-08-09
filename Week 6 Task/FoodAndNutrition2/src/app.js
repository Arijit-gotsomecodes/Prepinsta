require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const foodRoutes = require('./routes/foodRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use environment variables for MongoDB connection
const mongoUri = process.env.MONGODB_ATLAS_CONNECTION_STRING || 'mongodb://localhost:27017/FoodAndNutrition2';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Configure CORS
const corsOptions = {
  origin: '*', // Allow all origins, or specify the origin of your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' folder
app.use('/api/food', foodRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Food and Nutrition API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
