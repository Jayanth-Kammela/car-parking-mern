import axios from "axios";

const url = "http://localhost:8081/userbooking";

export const getBooking = async (id) => {
    id = id || "";
    return await axios.get(`${url}/${id}`);
};

export const postBooking = async (user) => {
    return await axios.post(url, user);
};