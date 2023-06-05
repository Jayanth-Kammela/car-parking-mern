import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    vehicleNumber: '',
    buttonId: id,
    fromDate: '',
    fromTime: '',
    toDate: '',
    toTime: '',
  });

  const forCancel = () => {
    navigate('/');
  };

  const forChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const forSubmit = async (event) => {
    event.preventDefault();
    try {
      const { fromDate, toDate, vehicleNumber, buttonId } = data;
      const formattedData = {
        buttonId,
        vehicleNumber,
        fromDate,
        toDate,
        duration: forTime(),
        cost: forCost(),
      };
      console.log(formattedData);

      const newData = await axios.post('http://localhost:8081/userbooking', formattedData);
      console.log(newData);
      toast.success('Booked Successfully', { position: "top-right", autoClose: 1000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", });
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Failed to create booking!' ,{
        theme: "colored",
      });
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];

  const forTime = () => {
    const { fromDate, fromTime, toDate, toTime } = data;
    const startTime = new Date(`${fromDate} ${fromTime}`);
    const endTime = new Date(`${toDate} ${toTime}`);
    const duration = (endTime - startTime) / (1000 * 60 * 60); // Duration in hours
    return `${duration}`;
  };

  const forCost = () => {
    const duration = forTime();
    const costPerHour = 120;
    return duration * `${costPerHour}`;
  };

  return (
    <div>
      <h3>Booking Form for Slot {id}</h3>
      <form onSubmit={forSubmit}>
        <label>
          Vehicle Number:
          <input type="text" name="vehicleNumber" onChange={forChange} required />
        </label>
        <br />

        <label>
          From Date:
          <input type="date" name="fromDate" onChange={forChange} min={currentDate} required />
        </label>
        <br />

        <label>
          From Time:
          <input type="time" name="fromTime" onChange={forChange} required />
        </label>
        <br />

        <label>
          To Date:
          <input type="date" name="toDate" onChange={forChange} min={currentDate} required />
        </label>
        <br />

        <label>
          To Time:
          <input type="time" name="toTime" onChange={forChange} required />
        </label>
        <br />

        {data.fromDate && data.fromTime && data.toDate && data.toTime && (
          <h4>
            Duration: {forTime()} hours | Cost: {forCost()} rupees
          </h4>
        )}

        <button type="submit">Submit</button>
        <button type="button" onClick={forCancel}>
          Cancel
        </button>
      </form>

    </div>
  );
};

export default BookingForm;
