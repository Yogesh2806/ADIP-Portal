import React from "react";
import { TextField,Typography } from "@mui/material";

const FormPage = () => {
  return (
    <div className="mainForm">
      <div className="formSectiom">
        <form >
          <div className="form-group">
          <Typography variant="h4">
            Basic Details
          </Typography>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Name" variant="outlined" />

          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
