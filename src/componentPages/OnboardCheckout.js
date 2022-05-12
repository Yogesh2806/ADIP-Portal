import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import { Link } from "react-router-dom";

export default function OnboardCheckout() {
  const steps = ["Personal Details", "Servicing Details", "Documents Required"];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm data={postData} setdata={setPostData} />;
      case 1:
        return <PaymentForm data={postData} setdata={setPostData} />;
      case 2:
        return <Review data={postData} setdata={setPostData} />;
      default:
        throw new Error("Unknown step");
    }
  }
  function randomUit() {
    return Math.floor(Math.random() * 10000001 + 1);
  }

  const theme = createTheme();

  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    guardian: "",
    contact: "",
    dob: "",
    gender: "",
    realtionStatus: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    speakEnglish: "",
    lang: "",
    moreThanOnename: "",
    citizen: "",
    govScheme: "",
    govPosition: "",
    photo: "",
    address: "",
    identity: "",
    income: "",
    disability: "",
    bank: "",
  });

  // console.log("response", location.state);
  // const [user, setUser] = useState(location.state.profileObj);
  // console.log("response state", user);

  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    if (
      postData.firstName === "" ||
      postData.lastName === "" ||
      postData.guardian === "" ||
      postData.contact === "" ||
      postData.dob === "" ||
      postData.gender === "" ||
      postData.realtionStatus === "" ||
      postData.addressLine1 === "" ||
      postData.addressLine2 === "" ||
      postData.city === "" ||
      postData.state === "" ||
      postData.zip === "" ||
      postData.country === "" ||
      postData.speakEnglish === "" ||
      postData.lang === "" ||
      postData.moreThanOnename === "" ||
      postData.citizen === "" ||
      postData.govScheme === "" ||
      postData.govPosition === "" ||
      postData.photo === "" ||
      postData.address === "" ||
      postData.identity === "" ||
      postData.income === "" ||
      postData.disability === "" ||
      postData.bank === ""
    ) {
      alert("Fill form to continue !");
    } else {
      setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 1000);
    }

    setPostData({
      firstName: "",
      lastName: "",
      guardian: "",
      contact: "",
      dob: "",
      gender: "",
      realtionStatus: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      speakEnglish: "",
      lang: "",
      moreThanOnename: "",
      citizen: "",
      govScheme: "",
      govPosition: "",
      photo: "",
      address: "",
      identity: "",
      income: "",
      disability: "",
      bank: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography
        variant="h4"
        align="center"
        marginTop="2rem"
        fontWeight="bold"
      >
        ONBOARDING
      </Typography>
      <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h5" align="center">
            DETAILS REQUIRED
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your time and efforts.
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 3 }}>
                  Your Unique Tracking number is{" "}
                  <span className="uid">#{randomUit()}</span>. We have emailed
                  your confirmation, and will send you an update when your order
                  service gets ready. Your UID Card will be ready in 3 to 4
                  Buisness Days.
                </Typography>
                <Link className="ucardlink" to="/ucard">
                  view card
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {activeStep !== 2 && (
                    <Button onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                      next
                    </Button>
                  )}
                  {activeStep === steps.length - 1 && (
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      submit
                    </Button>
                  )}
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button> */}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
