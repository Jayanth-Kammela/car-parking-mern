const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  buttonId: {
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
