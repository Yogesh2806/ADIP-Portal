import React from "react";
import { Button, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../icons/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [user, setUser] = useState();
  const [tokenId, setTokenId] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const logout = () => {
    navigate("/");

    // setUser(null);
    // setTokenId(null);

    localStorage.removeItem("profile");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token"));

    const profileData = JSON.parse(localStorage.getItem("profile"));

    setUser(profileData);

    // setUser(JSON.parse(localStorage.getItem("profile")));
    // console.log(user.name);
    // console.log(user.imageUrl);

    // if (token) {
    // const decodedToken = decode(token);
    // if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }
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
            NDM
          </Navbar.Brand>
          <Nav className="me-auto navLinks">
            <Link to="/">Home</Link>
            <Link to="#">Contact</Link>
          </Nav>
          {user && user ? (
            <>
              <Nav className=" navLinks">
                <Avatar
                  alt={user?.name}
                  src={user?.imageUrl}
                  className="userImage"
                >
                  {user?.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">{user?.name}</Typography>
                <Button variant="outlined" onClick={logout}>
                  Logout
                </Button>
              </Nav>
            </>
          ) : (
            <>
              <Nav className=" navLinks">
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
