import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Form from "react-bootstrap/Form";

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Photo (pdf, jpg, jpeg, png)</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              Address Proof (Aadhaar Card / Passport / Property Tax Bill)
            </Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Identity Proof (PAN Card / Voter ID)</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Pan Card</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Income Slip</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Disability Certificate</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
