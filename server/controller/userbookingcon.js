const UserBooking = require('../model/userbooking');

const postUserBooking = async (req, res) => {
    try {
        const userbooking = new UserBooking(req.body);
        await userbooking.save();
        return res.status(200).json(userbooking);
    } catch (error) {
        return res.status(200).json(error);
    }
};

const getUserBooking = async (req, res) => {
    try {
        const userbookings = await UserBooking.find({});
        return res.status(200).json(userbookings);
    } catch (error) {
        return res.status(200).json(error);
    }
};

module.exports = { postUserBooking, getUserBooking };
