import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import ButtonComponent from './ButtonComponent';
import BookingForm from './BookingForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const BookingContext = createContext();

const UserBooking = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: '',
    mobile: '',
    buttonId: null,
    vehicleNumber: '',
    fromDate: '',
    fromTime: '',
    toDate: '',
    toTime: '',
    duration: 0,
    cost: 0,
  });
  const [bookedData, setBookedData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/userbooking');
      setBookedData(response.data.activeArray);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const forButtonClick = (button) => {
    setData({
      ...data,
      buttonId: button.name,
      fullname: '',
      mobile: '',
      vehicleNumber: '',
      fromDate: '',
      fromTime: '',
      toDate: '',
      toTime: '',
      duration: 0,
      cost: 0,
    });
    setShowForm(true);
  };

  const forCancel = () => {
    setShowForm(false);
  };

  const currentDate = new Date().toISOString().split('T')[0];

  const forTime = () => {
    const { fromDate, fromTime, toDate, toTime } = data;
    const startTime = new Date(`${fromDate} ${fromTime}`);
    const endTime = new Date(`${toDate} ${toTime}`);
    const duration = (endTime - startTime) / (1000 * 60 * 60); // 1 hour
    return duration;
  };

  const forCost = () => {
    const duration = forTime();
    const costPerHour = 120;
    return duration * costPerHour;
  };

  const forChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const forSubmit = async (event) => {
    event.preventDefault();
    const { fromDate, toDate, fromTime, toTime, vehicleNumber, buttonId, fullname, mobile } = data;
    const formattedData = {
      fullname,
      mobile,
      buttonId,
      vehicleNumber,
      fromDate,
      toDate,
      fromTime,
      toTime,
      duration: forTime(),
      cost: forCost(),
    };
    try {
      const newData = await axios.post('http://localhost:8081/userbooking', formattedData);
      console.log(formattedData);

      const ticketId = newData.data._id;
      console.log(ticketId);
      toast.success('Booked Successfully', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      setBookedData([...bookedData, newData.data]);
      setShowForm(false);

      navigate(`/ticket/${ticketId}`);
      console.log('app');
      getData();
    } catch (error) {
      console.log(error);
      toast.error('Failed to book!', {
        theme: 'colored',
      });
    }
  };

  const buttons = [
    { id: 1, name: 'A1', category: 'A' },
    { id: 2, name: 'A2', category: 'A' },
    { id: 3, name: 'A3', category: 'A' },
    { id: 4, name: 'A4', category: 'A' },
    { id: 5, name: 'A5', category: 'A' },
    { id: 6, name: 'A6', category: 'A' },
    { id: 7, name: 'A7', category: 'A' },
    { id: 8, name: 'A8', category: 'A' },
    { id: 9, name: 'A9', category: 'A' },
    { id: 10, name: 'A10', category: 'A' },
    { id: 11, name: 'B1', category: 'B' },
    { id: 12, name: 'B2', category: 'B' },
    { id: 13, name: 'B3', category: 'B' },
    { id: 14, name: 'B4', category: 'B' },
    { id: 15, name: 'B5', category: 'B' },
    { id: 16, name: 'B6', category: 'B' },
    { id: 17, name: 'B7', category: 'B' },
    { id: 18, name: 'B8', category: 'B' },
    { id: 19, name: 'B9', category: 'B' },
    { id: 20, name: 'B10', category: 'B' },
  ];

  const forButton = (button) => {
    const forDisable = bookedData.some((data) => data.buttonId === button.name);
    return (
      <ButtonComponent
        key={button.id}
        button={button}
        forDisable={forDisable}
        forButtonClick={() => forButtonClick(button)}
      />
    );
  };

  const filterButtonsByCategory = (category) => {
    const filteredButtons = buttons.filter((button) => button.category === category);
    return filteredButtons.map((button) => forButton(button));
  };

  return (
    <BookingContext.Provider value={{ data, currentDate, showForm, forChange, forSubmit, forCancel, forTime, forCost }}>
      <div className='parent-block'>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginRight: 20 }}>
          <div>
            <h1 className='block-name'>Block-A</h1>
            {filterButtonsByCategory('A')}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 20 }}>
          <div>
            <h1 className='block-name'>Block-B</h1>
            {filterButtonsByCategory('B')}
          </div>
        </div>
      </div>
      <BookingForm />
    </BookingContext.Provider>
  );
};

export default UserBooking;
