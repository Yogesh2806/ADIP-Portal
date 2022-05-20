import React from "react";
import { Button, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../icons/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import * as actionType from "../constants/actionTypes";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import final2022 from "../ucardPDF/final2022.xlsx";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // const [user, setUser] = useState();
  // const [tokenId, setTokenId] = useState(
  //   JSON.parse(localStorage.getItem("token"))
  // );

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/");
    setUser(null);

    // setUser(null);
    // setTokenId(null);

    // localStorage.removeItem("profile");
    // localStorage.removeItem("token");
  };

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token"));

    // const profileData = JSON.parse(localStorage.getItem("profile"));

    // setUser(profileData);

    // setUser(JSON.parse(localStorage.getItem("profile")));
    // console.log(user.name);
    // console.log(user.imageUrl);

    // if (token) {
    // const decodedToken = decode(token);
    // if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }

    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            ADIP SEVA
          </Navbar.Brand>
          <Nav className="me-auto navLinks">
            <Link to="/">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="faq">FAQ</Link>
            <a
              style={{
                color: "wheat",
              }}
              href={final2022}
              download
              target="_blank"
              rel="noreferrer"
            >
              Latest Beneficiary Quota
            </a>
          </Nav>
          {user?.result ? (
            <>
              <Nav className=" navLinks">
                <Link to="/onboarding">Fill New Entity</Link>
                <Link to="/ucard">Get UDID</Link>
                <Link to="/downloads">Download Schemes</Link>
              </Nav>
              <Nav className=" navLinks">
                <Avatar
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                  className="userImage"
                >
                  {user?.name}
                </Avatar>
                <Typography variant="h6">{user?.result.name}</Typography>
                <Button variant="outlined" onClick={logout}>
                  Logout
                </Button>
              </Nav>
            </>
          ) : (
            <>
              <Nav className=" navLinks">
                <Link to="/signup">Login / Register</Link>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
