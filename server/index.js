const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URI
const uri = "mongodb+srv://ShaikAhmed:Shaik%40400@costumerdetails.szid5.mongodb.net/details?retryWrites=true&w=majority";

const app = express();
const PORT = 7001; // Set the port number

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  phone: String,
  city: String
});

const Booking = mongoose.model('Booking', bookingSchema);

// Middleware setup
app.use(cors()); // Allows cross-origin requests from the frontend
app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase(); // Call the function to connect to MongoDB

// POST route to handle form submission
app.post('/api/booking', async (req, res) => {
  try {
    // Create a new Booking document with the form data
    const booking = new Booking(req.body);
    
    // Save the Booking document to the database
    await booking.save();
    
    // Respond with success message
    res.status(201).send({ message: 'Form data saved successfully', data: req.body });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send({ message: 'Error saving form data' });
  }
});

// GET route for testing server
app.get('/api/booking', (req, res) => {
  res.send('<h1>Backend is running!</h1>');
});

// Start the server and handle shutdown gracefully
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error('Server error:', err);
  }
});

// Gracefully shut down the server to release the port
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server shut down gracefully');
    process.exit(0);
  });
});
