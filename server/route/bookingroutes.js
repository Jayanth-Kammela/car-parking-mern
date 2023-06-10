const express = require("express");
const router = express.Router();

const { postUserBooking, getUserBooking, getUserBookingById } = require('../controller/userbookingcon')

router.post('/', postUserBooking);
router.get('/', getUserBooking);
router.get('/:id', getUserBookingById);

module.exports = router;