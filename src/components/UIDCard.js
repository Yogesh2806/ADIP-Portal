import { Typography, Grid } from "@mui/material";
import React from "react";
import emblem from "../icons/emblem.png";
import india from "../icons/india.png";
import avatar from "../icons/avatar.png";
import qrcode from "../icons/qrcode.png";

const UniqueCard = ({ post }) => {
  function randomUit() {
    return Math.floor(Math.random() * 10000000001 + 1);
  }

  return (
    <div className="CardContainer">
      <div className="frontPage">
        <div className="cardHeading">
          <img src={emblem} width="25rem" height="25rem" alt="emblem" />
          <Typography variant="body1">Government of India</Typography>
          <img src={india} width="25rem" height="25rem" alt="india" />
        </div>
        <div className="cardBody">
          <img
            src={post.photo}
            width="120rem"
            height="120rem"
            style={{ borderRadius: "0.4rem" }}
            alt="avatar"
          />
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
                <Typography variant="body1">
                  {post.firstName} {post.lastName}
                </Typography>
                <Typography variant="body1">{post.dob}</Typography>
                <Typography variant="body1">{post.gender}</Typography>
                <Typography variant="body1">{post.guardian}</Typography>
                <Typography variant="body1">{randomUit()}</Typography>
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
                <Typography variant="body1">
                  {post.addressLine1},{post.addressLine2},{post.city},
                  {post.state},{post.country},{post.zip}
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
