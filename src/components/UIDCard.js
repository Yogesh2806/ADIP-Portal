import { Typography, Grid } from "@mui/material";
import React from "react";
import emblem from '../icons/emblem.png'
import india from '../icons/india.png'
import avatar from '../icons/avatar.png'
import qrcode from '../icons/qrcode.png'

const UniqueCard = () => {
  return (
    <div className="CardContainer">
      <div className="frontPage">
        <div className="cardHeading">
          <img src={emblem} width="25rem" height="25rem" alt="emblem" />
          <Typography variant="body1">Government of India</Typography>
          <img src={india} width="25rem" height="25rem" alt="india" />
        </div>
        <div className="cardBody">
          <img src={avatar} width="120rem" height="120rem" alt="india" />
          <div className="cardInfo">
            <Grid container spacing={1} className="cardDetails">
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">Name</Typography>
                  <Typography variant="body1">DOB</Typography>
                  <Typography variant="body1">Gender</Typography>
                  <Typography variant="body1">Care Taker</Typography>
                  <Typography variant="body1">ADIP ID</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">Asus</Typography>
                  <Typography variant="body1">12/1/2000</Typography>
                  <Typography variant="body1">Male</Typography>
                  <Typography variant="body1">Vivo</Typography>
                  <Typography variant="body1">1234567892</Typography>
                </Grid>
            </Grid>
          </div>
        </div>
        <div className="cardUID">
        <Typography variant="body1">Unique ID</Typography>
          <Typography variant="h4">3000 20000 100</Typography>
        </div>
      </div>
      <div className="backPage">
      <div className="cardHeading">
          <img src={emblem} width="25rem" height="25rem" alt="emblem" />
          <Typography variant="body1">Government of India</Typography>
          <img src={india} width="25rem" height="25rem" alt="india" />
        </div>
        <div className="cardBody">
          <img src={qrcode} width="120rem" height="120rem" alt="india" />
          <div className="cardInfo">
            <Grid container spacing={1} className="cardDetails">
                <Grid item xs={12}>
                  <Typography variant="body2">Address</Typography>
                  <Typography variant="body1">509/5, Agathiyar third street, Mogappair East,
                      Chennai, Mogappair, Tiruvallur,
                      Tamil Nadu - 600037
                    </Typography>
                </Grid>
            </Grid>
          </div>
        </div>
        <div className="cardUID">
        <Typography variant="body1">Unique ID</Typography>
          <Typography variant="h4">3000 20000 100</Typography>
        </div>  
      </div>
    </div>
  );
};

export default UniqueCard;
