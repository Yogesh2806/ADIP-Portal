import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import eye from "../icons/eye.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const initialState = {
  email: "",
  password: "",
};

function SignIn() {
  const navigate = useNavigate();
  // const [resultData, setResultData] = useState();
  // const [tokenData, setTokenData] = useState();
  const [formData, setFormData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:5000/auth";
      const { data: res } = await axios.post(url, formData);
      localStorage.setItem("tokenMail", res.data);
      window.location = "/onboarding";
      console.log(res.data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error, "message from signin");
      }
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const googleSuccess = async (res) => {
    // console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;
    // console.log(result, token);

    localStorage.setItem("profile", JSON.stringify(result));
    localStorage.setItem("token", JSON.stringify(token));

    // setResultData(result);
    // setTokenData(token);
    // console.log(resultData);
    // console.log(tokenData)
    navigate("/onboarding", { state: res });
  };
  const googleFailure = async () => {
    console.log("login failed");
    navigate("/signin");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#212529" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              onChange={handleChange}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              onChange={handleChange}
              fullWidth
              name="password"
              label="Password"
              helperText="Password must have special character and numbers"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
            ></TextField>
            <img
              className="eyeIcon2"
              alt="eye"
              src={eye}
              width="25"
              height="25"
              onClick={handleShowPassword}
            />
            {/* <TextField
              margin="normal"
              required
              onChange={handleChange}
              fullWidth
              id="number"
              label="Phone Number"
              name="number"
              autoComplete="number"
            /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#212529" }}
            >
              Sign In
            </Button>
            <GoogleLogin
              clientId="107552539329-eftetj8pijj5uiuknec9ov1qj280tol5.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#212529" }}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  // startIcon={<Icon >}
                >
                  Google Login
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
