//* DEPENDENCIES
// .env variable
require('dotenv').config();
// deconstruct from .env file
const { PORT, DATABASE_URL } = process.env;
// import express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');
const flightController = require('./controllers/flight.js');
const admin = require('firebase-admin');
//* IMPORT MIDDLEWARE
const cors = require('cors');
const morgan = require('morgan');
// create application object
const app = express();
// connect to mongoDB
mongoose.connect(DATABASE_URL);
// Set up MongoDB listeners
// Database Connection Error/Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
//* Mount MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//* Mount controllers
app.use('/flight', flightController);

//* Test Route
// app.get('/', (req, res) => {
//   res.send('hello world');
// });

//* Listener
app.listen(PORT, () =>
  console.log(`Flights are soaring over Sky-port ${PORT}`)
);
