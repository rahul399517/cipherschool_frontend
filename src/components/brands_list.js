import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "./brands_list.css";
function BrandList() {
  return (
    <div className="row m-2" id="brandlist">
      <Card style={{ border: "none" }}>
        <Card.Title style={{ fontSize: "300%", fontWeight: "600" }}>
          Creators from
          <br></br>
        </Card.Title>
      </Card>

      <div className="row">
        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                  alt="not available "
                ></img>
              </div>
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                  alt="not available "
                ></img>
              </div>
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Oyorooms-branding.svg/1200px-Oyorooms-branding.svg.png"
                  alt="not available "
                ></img>
              </div>
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://corporate.walmart.com/_download?id=0000016d-f8b2-d758-a1ed-f8b290f10000"
                  alt="not available "
                ></img>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png"
                  alt="not available "
                ></img>
              </div>
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
                  alt="not available "
                ></img>
              </div>
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Dream11_Logo_2023.png"
                  alt="not available "
                ></img>
              </div>
              <div className="col-3">
                <img
                  className="p-2"
                  style={{ height: "70px" }}
                  src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
                  alt="not available "
                ></img>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default BrandList;
