import React, {useState, useEffect} from "react";
import "./Slider.css"; // Import your CSS file

const Slider = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    "assets/imgs/1.jpg",
    "assets/imgs/2.jpg",
    "assets/imgs/3.jpg",
    "assets/imgs/4.jpg",
    "assets/imgs/5.jpg",
  ];

  const lengthItems = items.length - 1;

  const nextSlide = () => {
    setActive((prev) => (prev + 1 <= lengthItems ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : lengthItems));
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="list">
        {items.map((src, index) => (
          <div
            className={`item ${index === active ? "active" : ""}`}
            key={index}>
            <img className="image_size" src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="button" onClick={prevSlide}>
          &larr;
        </button>
        <button className="button" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
      <ul className="dots">
        {items.map((_, index) => (
          <li
            key={index}
            className={index === active ? "active" : ""}
            onClick={() => handleDotClick(index)}></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
