// import React from 'react';
// import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
// import NoCrashIcon from '@mui/icons-material/NoCrash';

// const ButtonComponent = ({ button, bookedData, onClick }) => {
//   const forDisable = bookedData.some((data) => data.buttonId === button.id);

//   return (
//     <button disabled={forDisable} className={forDisable ? 'not-avail' : 'avail'} onClick={onClick}>
//       {forDisable ? <NoCrashIcon /> : <TimeToLeaveIcon />}
//     </button>
//   );
// };

// export default ButtonComponent;



import React from 'react';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import NoCrashIcon from '@mui/icons-material/NoCrash';

const ButtonComponent = ({ button, forDisable, forButtonClick }) => {
  return (
    <button
      onClick={forButtonClick}
      disabled={forDisable}
      variant="contained"
      className={forDisable ? 'not-avail' : 'avail'}
      style={{ marginRight: 30, marginBottom: 35 }}
    >
      {forDisable ? button.name : button.name}
    </button>
  );
};

export default ButtonComponent;


