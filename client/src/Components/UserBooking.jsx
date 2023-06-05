import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';

const UserBooking = () => {
  const [bookedData, setBookedData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/userbooking');
      setBookedData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buttons = [
    { id: 1, name: 'A1' },
    { id: 2, name: 'A2' },
    { id: 3, name: 'A3' },
    { id: 4, name: 'A4' },
    { id: 5, name: 'A5' },
    { id: 6, name: 'A6' },
    { id: 7, name: 'A7' },
    { id: 8, name: 'A8' }
  ];

  return (
    <React.Fragment>
      <h3>Booking Slots</h3>
      {buttons.map((button) => (
        <Link to={`/booking/${button.id}`} key={button.id}>
          <ButtonComponent button={button} bookedData={bookedData} />
        </Link>
      ))}
    </React.Fragment>
  );
};

export default UserBooking;
