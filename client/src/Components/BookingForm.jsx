import React, { useContext } from 'react';
import { Modal, Typography, TextField, Grid, Button, Badge } from '@mui/material';
import { BookingContext } from './UserBooking';

const BookingForm = () => {

  const { showForm, forCancel, data, currentDate, forChange, forSubmit, forTime, forCost } = useContext(BookingContext);
  
  return (
    <Modal open={showForm} onClose={forCancel}>
      <div
        style={{
          width: '100%',
          maxWidth: 600,
          margin: 'auto',
          marginTop: 50,
          backgroundColor: 'white',
          padding: 54,
          borderRadius: 10,
        }}
      >
        <div>
          <span className='btn-name'>slot:<Badge className='badge' badgeContent={data.buttonId} color="primary" /></span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          Enter Details
        </div>

        <form onSubmit={forSubmit}>
          <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }}>
            <Grid item xs={12}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} fullWidth placeholder="FullName" name="fullname" onChange={forChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} type='tel' fullWidth placeholder="Mobile Number" name="mobile" onChange={forChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} fullWidth placeholder="Vehicle Number" name="vehicleNumber" onChange={forChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} fullWidth type="date" placeholder="From Date" name="fromDate" onChange={forChange} min={currentDate} required />
            </Grid>
            <Grid item xs={6}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} fullWidth type="time" placeholder="From Time" name="fromTime" onChange={forChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} fullWidth type="date" placeholder="To Date" name="toDate" onChange={forChange} min={currentDate} required />
            </Grid>
            <Grid item xs={6}>
              <TextField InputProps={{
                style: {
                  height: "2.6em",
                  fontFamily: 'IBM Plex Mono'
                }
              }} fullWidth type="time" placeholder="To Time" name="toTime" onChange={forChange} required />
            </Grid>
          </Grid>
          {
            data.fromDate && data.fromTime && data.toTime && data.toDate && (
              <><Typography variant="subtitle1" align="center" style={{ marginTop: 20 }}>
                Duration: {forTime()} hours
              </Typography><Typography variant="subtitle1" align="center">
                  Cost:{forCost()}
                </Typography></>
            )}
          <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            {/* <Grid sx={{display:'flex',marginTop:'20px'}}> */}
            <Grid item xs={6}>
              <button className='btn-cancel' onClick={forCancel}>
                Cancel
              </button>
            </Grid>
            <Grid item xs={6} >
              <button className='btn-submit' type="submit" >
                Book Now
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
};

export default BookingForm;
