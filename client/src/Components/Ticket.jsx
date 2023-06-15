import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import './Ticket.css';
import { getBooking } from '../Services/Services';

const Ticket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticketData, setTicketData] = useState(null);

  const getTicketDataById = async () => {
    try {
      const response = await getBooking(id);
      setTicketData(response.data);
      // setTimeout(() => {
      //   navigate('/')
      // }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicketDataById();
  }, []);

  if (!ticketData) {
    return <div>Loading...</div>;
  }

  const ticketDataString = `
  Parking Ticket
    Name: ${ticketData.fullname}
    Mobile: ${ticketData.mobile}
    Ticket ID: ${ticketData._id}
    Vehicle Number: ${ticketData.vehicleNumber}
    From: ${ticketData.fromDate}${ticketData.fromTime}
    To: ${ticketData.toDate} ${ticketData.toTime}
    Duration: ${ticketData.duration} hours
    Cost: ${ticketData.cost} rupees
  `;
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
    padding: '20px'
  };


  return (
    <React.Fragment>
      <div className='main'>
        <div className="ticket-container">
          <h2 className="ticket-title">Parking Ticket</h2>
          <div className="qr-code">
            <QRCode value={ticketDataString} width='100px' />
          </div>
          <div className="ticket-details">
            <div className="ticket-details-left">
              <div><strong>Name:</strong> {ticketData.fullname}</div>
              <div><strong>Mobile:</strong> {ticketData.mobile}</div>
              <div><strong>Vehicle Number:</strong> {ticketData.vehicleNumber}</div>
            </div>
            <div className="ticket-details-right">
              <div><strong>From:</strong> {ticketData.fromDate}</div>
              <div><strong>To:</strong> {ticketData.toDate}</div>
            </div>
          </div>
          <div className="ticket-details-bottom">
            <div><strong>Duration:</strong> {ticketData.duration} hours</div>
            <div><strong>Cost:</strong> {ticketData.cost} rupees</div>
          </div>
        </div>
      </div>

      {/* <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Grid item xs={12} sm={7} md={8} lg={4} xl={4} sx={{ width: "100%", boxShadow: '0px 3px 15px 13px rgba(0,0,0,0.1)', borderRadius: '12px' }} className='custom-card'>
            <Card sx={CARD_PROPERTY} >
              <CardMedia
                component="div" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <QRCode value={ticketDataString} />
                </div>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }} component="div">
                  Id:{ticketData._id}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vehicle Number: {ticketData.vehicleNumber}<br />
                  <strong>Duration:{ticketData.duration}hrs
                    | Cost: {ticketData.cost} rupees.</strong>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Cancel</Button>
                <Button size="small">Download</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container> */}

    </React.Fragment>
  );
};

export default Ticket;
