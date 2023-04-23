import Carousel from "react-bootstrap/Carousel";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import "./slideshow.css";
function SlideShow() {
  return (
    <Carousel id="slideshow">
      <Carousel.Item>
        <img
          style={{ borderRadius: "20px" }}
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "20px" }}
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "20px" }}
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ borderRadius: "20px" }}
          className="d-block w-100"
          src={slide4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default SlideShow;
