import React from "react";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import UniqueCard from "../components/UIDCard";
import { Link } from "react-router-dom";
import UICARD from "../ucardPDF/ucard.pdf";

const CardPage = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <>
      {!posts.length ? (
        <CircularProgress
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        <div className="UIcardHolder">
          <Typography variant="h4" align="center">
            ACCESS YOUR VIRTUAL CARD
          </Typography>
          <div className="UIcard">
            {posts.map((post) => (
              <UniqueCard key={post._id} post={post} />
            ))}
          </div>
          <div className="buttonHolder">
            <Link className="infoLink" to="/info">
              View Info
            </Link>
            <a className="downloadLink" href={UICARD} download target="_blank">
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPage;
