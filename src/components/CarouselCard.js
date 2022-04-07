import React from "react";
import { Carousel } from "react-bootstrap";
// import pic1 from "../icons/pic1.jpg";
// import pic2 from "../icons/pic2.jpg";
// import pic3 from "../icons/pic3.jpg";

import p5 from "../icons/p5.jpeg";
import p7 from "../icons/p7.jpeg";
import p8 from "../icons/p8.jpeg";

const CarouselCard = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carouselPics" src={p8} alt="First slide" />
        <Carousel.Caption className="carouselCaption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselPics" src={p7} alt="Second slide" />

        <Carousel.Caption className="carouselCaption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselPics" src={p5} alt="Third slide" />

        <Carousel.Caption className="carouselCaption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCard;
