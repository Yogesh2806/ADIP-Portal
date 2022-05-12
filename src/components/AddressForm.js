import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

export default function AddressForm({ data, setdata }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            value={data.firstName}
            onChange={(e) => setdata({ ...data, firstName: e.target.value })}
            // error={data.firstName === ""}
            // helperText={data.firstName === "" ? "Empty field!" : " "}
            // error={data.firstName !== "" && !data.firstName.match("[^A-Z_.]")}
            // helperText={
            //   data.firstName !== "" && data.firstName.match("[^A-Z_.]")
            //     ? ""
            //     : "Use Capital"
            // }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.lastName}
            onChange={(e) => setdata({ ...data, lastName: e.target.value })}
            // error={data.lastName !== "" && !data.lastName.match("[^A-Z_.]")}
            // helperText={
            //   data.lastName !== "" && data.lastName.match("[^A-Z_.]")
            //     ? ""
            //     : "Use Capital"
            // }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="guardian"
            name="guardian"
            label="Guardian Name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.guardian}
            onChange={(e) => setdata({ ...data, guardian: e.target.value })}
            // error={data.guardian !== "" && !data.guardian.match("[^A-Z_.]")}
            // helperText={
            //   data.guardian !== "" && data.guardian.match("[^A-Z_.]")
            //     ? ""
            //     : "Use Capital"
            // }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact"
            name="number"
            label="Contact"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.contact}
            onChange={(e) => setdata({ ...data, contact: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dob"
            name="number"
            label="DOB (dd/mm/yyyy)"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.dob}
            onChange={(e) => setdata({ ...data, dob: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={data.gender}
            onChange={(e) => setdata({ ...data, gender: e.target.value })}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            Relationship Status
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={data.realtionStatus}
            onChange={(e) =>
              setdata({ ...data, realtionStatus: e.target.value })
            }
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="nondisclosure"
              control={<Radio />}
              label="Non-Disclosure"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            value={data.addressLine1}
            onChange={(e) => setdata({ ...data, addressLine1: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={data.addressLine2}
            onChange={(e) => setdata({ ...data, addressLine2: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={data.city}
            onChange={(e) => setdata({ ...data, city: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
            value={data.state}
            onChange={(e) => setdata({ ...data, state: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            value={data.zip}
            onChange={(e) => setdata({ ...data, zip: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            value={data.country}
            onChange={(e) => setdata({ ...data, country: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for package delivery"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
