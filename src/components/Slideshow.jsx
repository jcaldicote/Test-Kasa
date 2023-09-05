import "./Slideshow.scss";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PropTypes from "prop-types";

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="arrow">
      <div className="arrow_left" onClick={previousImage}>
        {images.length > 1 && <BsChevronLeft />}
      </div>
      <div className="arrow_right" onClick={nextImage}>
        {images.length > 1 && <BsChevronRight />}
      </div>
      <div className="count">
        {images.length > 1 && `${currentIndex + 1}/${images.length}`}
      </div>
      <img src={currentImage} alt={`Image ${currentIndex}`} />
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
