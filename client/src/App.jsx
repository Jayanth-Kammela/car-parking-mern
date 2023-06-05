import React from 'react';
import UserBooking from './Components/UserBooking';
import BookingForm from './Components/BookingForm';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UserBooking />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
