import React from 'react';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import { CustomButton, CustomStyles } from '../Styles/CustomStyles';

const ButtonComponent = ({ button, forDisable, forButtonClick }) => {

  return (
    <CustomButton
      onClick={forButtonClick}
      disabled={forDisable}
      className={forDisable === true ? 'not-avail' : 'avail'}
      style={{ ...CustomStyles.button }}>
      {forDisable ? <NoCrashIcon style={{color:'black'}} /> : button.name}
    </CustomButton>
  );
};

export default ButtonComponent;


