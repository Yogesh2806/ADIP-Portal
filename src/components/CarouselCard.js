import React from "react";
import { Carousel } from "react-bootstrap";
// import pic1 from "../icons/pic1.jpg";
// import pic2 from "../icons/pic2.jpg";
// import pic3 from "../icons/pic3.jpg";

import p5 from "../icons/p5.jpeg";
import p7 from "../icons/p7.jpeg";
import p8 from "../icons/p8.jpeg";

const CarouselCard = () => {
  const counter = () => {
    let i = 322001;
    return setInterval(() => {
      i = i + 1;
    }, 5000);
  };

  return (
    <div>
      <p style={{ textAlign: "right", marginRight: "6rem" }}>
        Number of AIDS/Appliances Requested:{counter()}
      </p>
      <Carousel>
        <Carousel.Item>
          <img className="carouselPics" src={p8} alt="First slide" />
          <Carousel.Caption className="carouselCaption">
            <h3>Support</h3>
            <p>National disability sansthan .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselPics" src={p7} alt="Second slide" />

          <Carousel.Caption className="carouselCaption">
            <h3>Rise</h3>
            <p>Disability Seva under governemt act.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselPics" src={p5} alt="Third slide" />

          <Carousel.Caption className="carouselCaption">
            <h3>Togetherness</h3>
            <p>Improvement in society.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
