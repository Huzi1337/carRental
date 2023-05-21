import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

interface Props {
  imagePath: string;
  imageCount: number;
}

const Carousel: React.FC<Props> = ({ imagePath, imageCount }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageUrls = Array.from(
    { length: imageCount },
    (_, i) => `${imagePath}/car${i + 1}.png`
  );

  return (
    <Slider {...settings}>
      {imageUrls.map((imageUrl, index) => (
        <div className="news__imageContainer" key={index}>
          <div
            className="news__image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <h2>New Classics in the Offer</h2>
            <h5>
              Driving a vintage car is not only a reason to be proud but
              <br />
              also an opportunity to present a unique vehicle on the road.
            </h5>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
