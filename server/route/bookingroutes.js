const express = require("express");
const router = express.Router();

const {postUserBooking,getUserBooking}=require('../controller/userbookingcon')

router.post('/',postUserBooking);
router.get('/',getUserBooking);

module.exports = router;