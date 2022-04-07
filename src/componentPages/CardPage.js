import { Button, Typography } from "@mui/material";
import React from "react";
import UniqueCard from "../components/UIDCard";

const CardPage = () => {
  return (
    <div className="UIcardHolder"> 
      <Typography variant="h4" align="center">
        ACCESS YOUR VIRTUAL CARD
      </Typography>
      <div className="UIcard">
        <UniqueCard />
      </div>
      <div className="buttonHolder">
        <Button variant="outlined">View Info</Button>
        <Button variant="outlined">Download</Button>
      </div>
    </div>
  );
};

export default CardPage;
