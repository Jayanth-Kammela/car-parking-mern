const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  buttonId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  gender: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports= mongoose.model("userbooking", registrationSchema);
