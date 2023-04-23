import Card from "react-bootstrap/Card";
import "./Home_Introcard.css";
import absolutlyfree from "../images/absolutlyfree.gif";
import ratings from "../images/ratings.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { API_BASE_URL } from "../config";
import Swal from "sweetalert2";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function IntroCard() {
  // Here we adding the modal for login
  const [showlogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  //   Here we adding the ,odal for sign up
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ..............................SIGNUP FUNCTIONALITY   .....................................

  //setting up use state for fullname ,password and email
  const [fullName, SetFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [street, SetStreet] = useState("");
  const [homeAddress, SetHomeAddress] = useState("");
  const [state, SetSate] = useState("");
  const [country, SetCountry] = useState("");
  //setting up loading animation
  const [loading, SetLoading] = useState(false);
  //signup event
  const signup = (event) => {
    // event.preventDefault();
    SetLoading(true);
    const requestData = {
      fullName: fullName,
      email,
      password,
      street,
      homeAddress,
      state,
      country,
    };
    axios
      .post(`${API_BASE_URL}/signup`, requestData)
      .then((result) => {
        debugger;
        if (result.status === 201) {
          SetLoading(false);
          Swal.fire({
            icon: "success",
            title: "User signed up successfully",
          });
        }
        // closing the signup modal :
        handleClose();
        // showing the  login modal :
        handleShowLogin();

        SetFullName("");
        SetEmail("");
        SetPassword("");
        SetStreet("");
        SetHomeAddress("");
        SetCountry("");
        SetSate("");
      })
      .catch((error) => {
        console.log(error);
        SetLoading(false);
        Swal.fire({
          icon: "error",
          title: "Signup failed , Please try again later",
        });
      });
  };

  // .........................................LOGIN FUNCTIONALITY.................................

  //declaring Dispatch
  const dispatch = useDispatch();
  //declaring Navigation
  const navigate = useNavigate();
  //login event
  const login = (event) => {
    // event.preventDefault();

    SetLoading(true);
    const requestData = { email, password };
    axios
      .post(`${API_BASE_URL}/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          SetLoading(false);
          /*Swal.fire({
           icon: "success",
           title: "User signed up successfully",
         });*/
          //here we are creating a local storage for user data
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem("user", JSON.stringify(result.data.result.user));
          //dispatching the data to the redux store here
          dispatch({ type: "LOGIN_SUCCESS", payload: result.data.result.user });
          //swal start
          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Logging you in..... ",

            html: `<img width="200" height="200" src="https://cdnb.artstation.com/p/assets/images/images/021/011/023/original/tejal-panchal-pussy-cat.gif?1570027735" alt="not available"/>`,

            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              //const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                // b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
          //swal end
          SetLoading(false);
          navigate(`/communitypage`);
        }

        /* SetEmail("");
       SetPassword("");*/
      })
      .catch((error) => {
        console.log(error);
        SetLoading(false);
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
        });
      });
  };

  return (
    <div>
      <Card id="introcard">
        <Card.Body>
          <Card.Title style={{ fontSize: "50px", fontWeight: "700" }}>
            Welcome to <span style={{ color: "#F3912E" }}>the Future</span> of
            Learning!
          </Card.Title>
          <Card.Title
            style={{ fontSize: "30px", fontWeight: "500", color: "#000000B3" }}
          >
            Start Learning by best creators for{" "}
            <span>
              <img
                style={{ width: "200px" }}
                src={absolutlyfree}
                alt="text not found"
              />
            </span>
          </Card.Title>
          <img
            style={{ width: "100%" }}
            src={ratings}
            alt="Ratings not found"
          />
          <br></br>

          <div className="row">
            {localStorage?.getItem("user") ? (
              <Button
                className="form-control mx-5 "
                style={{
                  height: "40px",
                  width: "240px",
                  borderRadius: "11px",
                  fontWeight: "500",
                  backgroundColor: "#F3912E",
                  border: "none",
                }}
              >
                Explore Courses (Disabled)
              </Button>
            ) : (
              <>
                {" "}
                <div className="col-5">
                  {" "}
                  <Button
                    id="loginsignup"
                    className="form-control "
                    onClick={handleShowLogin}
                  >
                    Login&nbsp; <i className="fa-solid fa-right-to-bracket"></i>
                  </Button>{" "}
                </div>
                <div className="col-2">or</div>
                <div className="col-5">
                  {" "}
                  <Button
                    id="loginsignup"
                    className="form-control "
                    onClick={handleShow}
                  >
                    signup&nbsp;<i className="fa-solid fa-user-plus"></i>
                  </Button>
                </div>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
      {/**modal working  */}
      <Modal
        show={showlogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title>
            <img src={logo} alt="logo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontWeight: "7000",
              color: "#F3912E",
            }}
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;Login{" "}
          </Card.Title>
          <br></br>
          <div className="form-floating mb-3">
            <input
              value={email}
              onChange={(ev) => SetEmail(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-user"></i>E mail
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={password}
              onChange={(ev) => SetPassword(ev.target.value)}
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Password"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-lock"></i>Password
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              login();
            }}
            style={{ width: "100%", backgroundColor: "#F3912E" }}
          >
            Login
          </Button>
          {/*Adding the loading animation on top of the card  */}
          {loading ? (
            <div className="row">
              <div className="col-md-12">
                {/*Adding spinner code from bootstrap */}
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="mt-2  d-grid">
            <button
              onClick={handleCloseLogin}
              className="custom-btn custom-btn-white"
              style={{ width: "100%", border: "none" }}
            >
              <span className="text-muted fs-6">Don't have an account?</span>
              <span style={{ color: "#F3912E" }} onClick={handleShow}>
                Sign Up
              </span>
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Modal for sign up  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title>
            <img src={logo} alt="logo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Title
            style={{
              textAlign: "center",
              fontWeight: "7000",
              color: "#F3912E",
            }}
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;Sign Up{" "}
          </Card.Title>
          <br></br>
          <div className="form-floating mb-3">
            <input
              value={fullName}
              onChange={(ev) => SetFullName(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-user"></i>&nbsp;Full Name
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={email}
              onChange={(ev) => SetEmail(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-envelope"></i>&nbsp;Enter E mail
            </label>
          </div>
          <div className="row">
            <div className="col-12" style={{ fontWeight: "600" }}>
              Address
            </div>
            <br></br>
          </div>
          <div className="form-floating mb-3">
            <input
              value={street}
              onChange={(ev) => SetStreet(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Street"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-street-view"></i>&nbsp;Street
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={homeAddress}
              onChange={(ev) => SetHomeAddress(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Appartment/Suite//Home Addres"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-building-user"></i>
              &nbsp;Appartment/Suite//Home Addres
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={state}
              onChange={(ev) => SetSate(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="state"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-group-arrows-rotate"></i>
              &nbsp;state
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={country}
              onChange={(ev) => SetCountry(ev.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Country"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-earth-americas"></i>
              &nbsp;Country
            </label>
          </div>
          <div className="col-12" style={{ fontWeight: "600" }}>
            Password
          </div>
          <div className="form-floating mb-3">
            <input
              value={password}
              onChange={(ev) => SetPassword(ev.target.value)}
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Password"
            />
            <label for="floatingInput">
              <i className="fa-solid fa-lock"></i>&nbsp;Set Password
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              signup();
            }}
            variant="primary"
            style={{ width: "100%", backgroundColor: "#F3912E" }}
          >
            Login
          </Button>
          {/*Adding the loading animation on top of the card  */}
          {loading ? (
            <div className="row">
              <div className="col-md-12">
                {/*Adding spinner code from bootstrap */}
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="mt-2  d-grid">
            <button
              onClick={handleClose}
              className="custom-btn custom-btn-white"
              style={{ width: "100%", border: "none" }}
            >
              <span className="text-muted fs-6">Already have an account?</span>
              <span style={{ color: "#F3912E" }} onClick={handleShowLogin}>
                Login
              </span>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default IntroCard;
