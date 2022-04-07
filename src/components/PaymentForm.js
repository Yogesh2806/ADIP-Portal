import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Servicing Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            Can you speak or understand English
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            If no, What language do you prefer
          </FormLabel>
          <FormLabel>
            If you cannot speak or understand English We will provide
            interpreter free of charge for translating
          </FormLabel>
          <TextField
            required
            id="language"
            label="Language"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            Can you write more than your name
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            Citizen of India
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            Previously enrolled in any governemt scheme
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLabel id="demo-radio-buttons-group-label">
            Governement service/position
          </FormLabel>
          <TextField
            required
            id="expDate"
            label="Service"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Provided is verified by authority of government"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
