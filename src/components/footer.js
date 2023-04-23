import "../components/footer.css";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../images/logo.png";
import { Card } from "react-bootstrap/esm";
function Footer() {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-11">
        <div id="footer">
          <div className="backtotop">
            <div
              className="col-sm-12"
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
              }}
            >
              <a style={{ color: "black", fontStyle: "none" }} href="#">
                Go Back To Top
              </a>
            </div>
          </div>

          <div className="row p-4">
            <div className="col-sm-12 col-md-6 p-5">
              <img style={{ float: "left" }} src={logo} alt="not available" />
              <br></br>
              <br></br>
              <Card.Text>
                Cipherschools is a bootstrapped educational video streaming
                platform in India that is connecting passionate unskilled
                students to skilled Industry experts to fulfill their career
                dreams.
              </Card.Text>
              <br></br>
              <br></br>
              <i className="fa-regular fa-envelope"></i>
              &nbsp;support@cipherschools.com
            </div>

            <div className="col-sm-2">
              <ul>
                <h6
                  style={{
                    fontFamily: "gerogia",
                    textAllign: "centre",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "120%",
                  }}
                >
                  <u>Popular Instructors </u>
                </h6>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Cipher Schools
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Coders Troops
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Harshit Vashisth
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Ayushi Sharma
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i>Danish Shaikh
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Shruti Codes
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-sm-2">
              <ul>
                <h6
                  style={{
                    fontFamily: "gerogia",
                    textAllign: "centre",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "120%",
                  }}
                >
                  <u>Popular Courses </u>
                </h6>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Programming
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Data science
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Data Structures
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Machine Learning
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i>Web Development
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Game Development
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <ul>
                <h6
                  style={{
                    fontFamily: "gerogia",
                    textAllign: "centre",
                    color: "black",
                    fontWeight: "600",
                    fontSize: "120%",
                  }}
                >
                  <u>Company Info </u>
                </h6>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Home
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> About us
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Contact us
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Site map
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i>Privay policy
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right"></i> Terms and
                    conditions
                  </p>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-sm-6" style={{ float: "left" }}>
                &copy;2020 CipherSchools • All Rights Reserved
              </div>
              <div className="col-sm-6" style={{ float: "left" }}>
                <div className="row">
                  <div className="col-1">
                    <i className="fa-brands fa-discord"></i>
                  </div>
                  <div className="col-1">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="col-1">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="col-1">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className="col-1">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="col-1">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
