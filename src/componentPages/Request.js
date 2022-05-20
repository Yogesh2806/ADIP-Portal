import React from "react";
import card1 from "../icons/card1.png";
import card2 from "../icons/card2.png";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const Request = () => {
  return (
    <div style={{ display: "grid", placeContent: "center", height: "80vh" }}>
      <div className="paycontainer">
        <div className="leftcard">
          <form className="payform">
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter first name"
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter Email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter Address"
                label="Address"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter City"
                label="City"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
            <div id="zipcard">
              <Grid xs={12} sm={12} item>
                <TextField
                  placeholder="Enter State"
                  label="State"
                  variant="outlined"
                  fullWidth
                  required
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  placeholder="Enter Zip Code"
                  label="Zip"
                  variant="outlined"
                  fullWidth
                  required
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
            </div>
          </form>
        </div>
        <div className="rightcard">
          <h3>PAYMENT</h3>
          <form>
            Accepted Card <br></br>
            <img src={card1} width="100" alt="card" />
            <img src={card2} width="50" alt="card" />
            <br></br>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter Card Number"
                label="Card Number"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter Exp Month"
                label="Expiry Month"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
            <div id="zip">
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter Exp Year"
                  label="Expiry Year"
                  variant="outlined"
                  fullWidth
                  required
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter CVV"
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  required
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
            </div>
            <h5>OR</h5>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter UPI"
                label="UPI"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                placeholder="Enter Amount"
                label="Amount"
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "1rem" }}
              />
            </Grid>
          </form>
          <input
            className="payBtn"
            type="submit"
            name=""
            value="Proceed to Pay"
          />
        </div>
      </div>
    </div>
  );
};

export default Request;
