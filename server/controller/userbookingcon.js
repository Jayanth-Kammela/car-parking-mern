const UserBooking=require('../model/userbooking')

const postUserBooking= async(req, res) => {
    const { buttonId, name, email, gender, date } = req.body;
    try {
        const userbooking = new UserBooking({buttonId,name,email,gender,date});
        userbooking.save()
        return res.status(200).json(userbooking);
    } catch (error) {
        return res.status(200).json(error);
    }
  }


  const getUserBooking= async(req, res) => {
    try {
        const userbooking = await UserBooking.find({})
        return res.status(200).json(userbooking);
    } catch (error) {
        return res.status(200).json(error);
    }
  }

  module.exports={postUserBooking,getUserBooking}