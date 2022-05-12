import * as React from "react";
import FileBase from "react-file-base64";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Form from "react-bootstrap/Form";

export default function Review({ data, setdata }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Documents
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Photo (pdf, jpg, jpeg, png)</Form.Label>
            <br />
            {/* <Form.Control type="file" /> */}
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setdata({ ...data, photo: base64 })}
            />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              Address Proof (Aadhaar Card / Passport / Property Tax Bill)
            </Form.Label>
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setdata({ ...data, address: base64 })}
            />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Identity Proof (PAN Card / Voter ID)</Form.Label>
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setdata({ ...data, identity: base64 })}
            />
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
            <Form.Label>Income Slip (Less than 20,000/month)</Form.Label>
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setdata({ ...data, income: base64 })}
            />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Disability Certificate (Min of 40%)</Form.Label>
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setdata({ ...data, disability: base64 })}
            />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Bank Account</Form.Label>
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setdata({ ...data, bank: base64 })}
            />
          </Form.Group>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
