const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema(
  {
    departure: String,
    arrival: String,
    adults: Number,
    children: Number,
    infants: Number,
    typeTrip: String,
    tripClass: String,
    time: String,
  },
  { timestamps: true }
);

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
