import React, { useContext } from 'react';
import { Modal, Typography, TextField, Grid, Button, Badge, Box } from '@mui/material';
import { BookingContext } from './UserBooking';
import { CustomBookBtn, CustomCancelBtn, CustomStyles } from '../Styles/CustomStyles';
const BookingForm = () => {

  const { showForm, forCancel, data, currentDate, forChange, forSubmit, forTime, forCost } = useContext(BookingContext);

  const IntitialFormData = [
    { id: 1, Type: 'text', Placeholder: 'FullName', Name: 'fullname', Function: forChange, boolean: false },
    { id: 2, Type: 'number', Placeholder: 'Mobile Number', Name: 'mobile', Function: forChange, boolean: false },
    { id: 3, Type: 'text', Placeholder: 'Vehicle Number', Name: 'vehicleNumber', Function: forChange, boolean: false },
    { id: 4, Type: 'date', Placeholder: 'From Date', Name: 'fromDate', Function: forChange, boolean: true, min: currentDate },
    { id: 5, Type: 'time', Placeholder: 'From Time', Name: 'fromTime', Function: forChange, boolean: true, min: currentDate },
    { id: 6, Type: 'date', Placeholder: 'To Date', Name: 'toDate', Function: forChange, boolean: true },
    { id: 7, Type: 'time', Placeholder: 'To Time', Name: 'toTime', Function: forChange, boolean: true }
  ]

  return (
    <Modal open={showForm} onClose={forCancel}>
      <Box sx={...CustomStyles.Box}>

        <div>
          <span className='btn-name'>slot:<Badge className='badge' badgeContent={data.buttonId} color="primary" /></span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          Enter Details
        </div>

        <form onSubmit={forSubmit}>
          <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }}>
            {
              IntitialFormData.map((data) => {
                return (
                  <Grid key={data.id} item xs={data.boolean ? 6 : 12}>
                    <TextField InputProps={{ style: { ...CustomStyles.Input } }} fullWidth type={data.Type} placeholder={data.Placeholder} name={data.Name} onChange={forChange} min={data.min} required />
                  </Grid>
                )
              })
            }
          </Grid>
          {
            data.fromDate && data.fromTime && data.toTime && data.toDate && (
              <><Typography variant="subtitle1" align="center" style={{ marginTop: 20 }}>
                Duration: {forTime()} hours
              </Typography>
                <Typography variant="subtitle1" align="center">
                  Cost:{forCost()}
                </Typography></>
            )}
          <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            {/* <Grid sx={{display:'flex',marginTop:'20px'}}> */}
            <Grid item xs={6}>
              <CustomCancelBtn onClick={forCancel}>Cancel</CustomCancelBtn>
            </Grid>
            <Grid item xs={6} >
              <CustomBookBtn type="submit">Book Now</CustomBookBtn>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingForm;
