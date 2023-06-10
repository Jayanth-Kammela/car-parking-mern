const UserBooking = require('../model/userbooking');

const postUserBooking = async (req, res) => {
    try {
        const { buttonId, fullname, mobile, vehicleNumber, fromDate, toDate, fromTime, toTime, duration, cost } = req.body;
        const newBooking = new UserBooking({
            buttonId,
            fullname,
            mobile,
            vehicleNumber,
            fromDate,
            toDate,
            fromTime,
            toTime,
            duration,
            cost,
        });
        await newBooking.save();
        return res.status(201).json(newBooking);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

const getUserBooking = async (req, res) => {
    try {
        const { expiredArray, activeArray } = await filterBooking();
        res.status(200).json({ expiredArray, activeArray });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const filterBooking = async () => {
    const currentDate = new Date();
    const expiredArray = [];
    const activeArray = [];
    try {
        const bookings = await UserBooking.find({});
        for (const data of bookings) {
            const isExpired =
                data.duration <= 0 ||
                data.toTime <= formatTime(currentDate);
            isExpired ? expiredArray.push(data) : activeArray.push(data)
        }
        return { expiredArray, activeArray };
    } catch (error) {
        console.error(error);
    }
};

const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};

const getUserBookingById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { activeArray } = await filterBooking();
        const userBooking = activeArray.find(data => data._id.toString() === id);
        if (!userBooking) {
            return res.status(404).json('Booking is expired');
        }
        return res.status(200).json(userBooking);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};


module.exports = { postUserBooking, getUserBooking, getUserBookingById };