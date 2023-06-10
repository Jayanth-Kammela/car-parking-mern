import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserBooking from './Components/UserBooking';
import Ticket from './Components/Ticket';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UserBooking />} />
        <Route path="/ticket/:id" element={<Ticket />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;

// import React from 'react';
// import { Button } from '@mui/material';
// import { buttonStyles } from './Components/CustomStyles';

// const MyCustomButton = () => {
//   return <Button sx={{ ...buttonStyles }}>Custom Button</Button>;
// };

// export default MyCustomButton;
