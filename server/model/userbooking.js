const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  buttonId: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: Number,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
    trim: true
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  fromTime: {
    type: String,
    required: true,
  },
  toTime: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("userbooking", bookingSchema);
