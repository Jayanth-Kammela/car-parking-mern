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

// import React, { useState } from 'react'

// function App() {
//   const buttons = [
//     { id: 1, name: 'A1', category: 'A' },
//     { id: 2, name: 'A2', category: 'A' },
//     { id: 3, name: 'A3', category: 'A' },
//     { id: 4, name: 'A4', category: 'A' },
//     { id: 5, name: 'A5', category: 'A' },
//     { id: 6, name: 'A6', category: 'A' },
//     { id: 7, name: 'A7', category: 'A' },
//     { id: 8, name: 'A8', category: 'A' },
//     { id: 9, name: 'A9', category: 'A' },
//     { id: 10, name: 'A10', category: 'A' },
//     { id: 11, name: 'B1', category: 'B' },
//     { id: 12, name: 'B2', category: 'B' },
//     { id: 13, name: 'B3', category: 'B' },
//     { id: 14, name: 'B4', category: 'B' },
//     { id: 15, name: 'B5', category: 'B' },
//     { id: 16, name: 'B6', category: 'B' },
//     { id: 17, name: 'B7', category: 'B' },
//     { id: 18, name: 'B8', category: 'B' },
//     { id: 19, name: 'B9', category: 'B' },
//     { id: 20, name: 'B10', category: 'B' },
//   ];

//   const [data, setData] = useState([])
//   const newData = (category) => {
//     const newXD=buttons.filter((button) => {
//       return button.category === category
//     })
//     setData(newXD)
//   }

//   const btnClick=(id)=>{
//     console.log(id);
//   }
//   return (
//     <div>
//       <button onClick={()=> newData('B')}>click-B</button>
//       <button onClick={()=> newData('A')}>click-A</button>
//       <div style={{display:'flex'}}>
//       {
//         data.map((xd)=>{
//           return(<button style={{margin:'10px'}} onClick={()=> btnClick(xd.id)}>{xd.name}</button>)
//         })
//       }
//       </div>
//     </div>
//   )
// }

// export default App