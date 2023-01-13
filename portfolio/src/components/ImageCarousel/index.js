import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel({ images }) {
  return (
    <div style={{ height: "300px", width: "95%" }}>
      <Carousel className="carousel" dynamicHeight={false} showThumbs={false}>
        {images?.map((el, index) => {
          console.log(el);
          return (
            <div key={index}>
              <img
                style={{ objectFit: "contain", height: "300px" }}
                src={`${el}`}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
