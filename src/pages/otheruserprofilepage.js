import Nav from "react-bootstrap/Nav";
import { Card } from "react-bootstrap/esm";
import Button from "react-bootstrap/Button";
import "./profilepage.css";
import "./otheruserprofilepage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useState } from "react";

import "./changepasscode.css";
import Graph from "./graph";
function OtherUserProfilepage() {
  // Declaring Params
  const params = useParams();

  //declaring dispatch
  const dispatch = useDispatch();
  //API call for logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
    dispatch({ type: "LOGOUT" });
    navigate("/home");
  };
  //selector
  const user = useSelector((state) => state.user);
  // declarind useNavigate
  const navigate = useNavigate();
  // to profilepage
  const toprofilepage = () => {
    navigate(`/profilepage/${user._id}`);
  };
    // to home
  const tohome = () => {
    navigate(`/home`);
  };
  //naviage to edit profile page
  const toupdatepage = () => {
    navigate(`/updatepage/${user._id}`);
    let timerInterval;
    Swal.fire({
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
  };
  const toupdatepassword = () => {
    navigate(`/changepassword/${user._id}`);
    let timerInterval;
    Swal.fire({
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
  };
  //   .................................... API call to Get single user details.............................

  const [singleuser, setSingleUser] = useState(null);

  const handleGetUser = () => {
    axios
      .get(`${API_BASE_URL}/singleuser/${params.id}`)
      .then((response) => {
        setSingleUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleGetUser();
  }, []);

  // ..........................FOLLOW /UNFOLLOW REACR CALL OF API ...................................
  //to show follow nutton if not following and to show unfollow button if following
  const [setShowFollow] = useState(user.followers?.includes(params.id)); //insted of wrting 'true' in use state ,we will find follower in the user profile , if found set false else true // here follower? is optional chaning
  //API call for follow user
  // const { state } = useContext(UserContext);
  const followUser = () => {
    fetch(`${API_BASE_URL}/follow`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        followId: params.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleGetUser();
        setShowFollow(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //calling unfollow API
  //API call for follow user
  // const { state } = useContext(UserContext);
  const unfollowUser = () => {
    fetch(`${API_BASE_URL}/unfollow`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        unfollowId: params.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleGetUser();
        setShowFollow(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // ............................. ALl userFUNCTIONALITY................................

  const [allusers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setAllUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-1" style={{ zIndex: "2" }}>
          <div style={{ marginTop: "77px" }}>
            <Card
              style={{
                border: "none",
                position: "fixed",
                left: "0px",
                zIndex: "1",
              }}
            >
              <Nav
                defaultActiveKey="/profilepage"
                variant="pills"
                className="flex-column "
                id="sidenavbar"
              >
                <Nav.Link
                 onClick={()=>{tohome()}}
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-solid fa-house"></i>
                  <p style={{ fontSize: "small" }}>Home</p>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-1"
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-solid fa-book"></i>
                  <p style={{ fontSize: "small" }}>Courses</p>
                </Nav.Link>
                <Nav.Link
                  eventKey="/profilepage"
                  onClick={() => {
                    toprofilepage();
                  }}
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-regular fa-user"></i>
                  <p style={{ fontSize: "small" }}>Profile</p>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-3"
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-solid fa-compass"></i>
                  <p style={{ fontSize: "small" }}>Trends</p>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-4"
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-solid fa-table-columns"></i>
                  <p style={{ fontSize: "small" }}>Dash-Board</p>
                </Nav.Link>
                <Nav.Link
                  eventKey="link-5"
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-brands fa-discord"></i>
                  <p style={{ fontSize: "small" }}>Discord</p>
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    logout();
                  }}
                  eventKey="link-6"
                  style={{ width: "60%", color: "black" }}
                  className="p-2"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  <p style={{ fontSize: "small" }}>Logout</p>
                </Nav.Link>
              </Nav>
            </Card>
          </div>
        </div>

        {/* Below , Main components  if the profile page will be built  */}
        <div className="col-11">
          {/* Top Profile pic and following devision */}
          <div className="row">
            <div className="col-12">
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  position: "fixed",
                  top: "80px",
                  left: "-2px",
                  zIndex: "1",
                }}
              >
                <Card.Body>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <span>
                        <img
                          className="shadow p-1"
                          id="profileimg"
                          src={singleuser?.profileImg}
                          alt="prfile pic"
                        />
                      </span>
                      <Card.Title id="greeting">
                        Follow : {singleuser?.fullName}
                      </Card.Title>
                      <br></br>
                      <Card.Subtitle className="mb-2 text-muted" id="email">
                        {singleuser?.email}
                      </Card.Subtitle>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9">
                          <div className="row">
                            <div className="col-6">
                              {" "}
                              <Button
                                className="form-control"
                                style={{
                                  border: " 1px  solid #F3912E",

                                  backgroundColor: "white",
                                  color: "#4169e1",
                                  fontWeight: "700",
                                }}
                              >
                                {singleuser?.followers?.length}
                                <br></br>Followers
                              </Button>
                            </div>
                            <div className="col-6">
                              <Button
                                className="form-control"
                                style={{
                                  border: " 1px  solid #F3912E",
                                  backgroundColor: "white",
                                  color: "#4169e1",
                                  fontWeight: "700",
                                }}
                              >
                                {singleuser?.following?.length}
                                <br></br>Following
                              </Button>
                            </div>
                          </div>
                          {/* Follow and unfollow button  */}
                          <div className="row">
                            <div className="col-6">
                              {singleuser?.followers?.includes(user._id) ? (
                                <>
                                  <div className="col-12 m-2">
                                    <button
                                      onClick={() => {
                                        unfollowUser();
                                      }}
                                      className="form-control btn btn-success"
                                    >
                                      following
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <div className="col-12 m-2">
                                  <button
                                    onClick={() => {
                                      followUser();
                                    }}
                                    className="form-control btn btn-primary"
                                  >
                                    Follow
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* user details Devisions*/}
          <div className="row">
            <div className="col-md-1 col-sm-2"></div>
            <div className="col-md-8 col-sm-10">
              <Card id="aboutme1">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", float: "left" }}>
                    ABOUT ME
                  </Card.Title>
                  <Card.Title style={{ float: "right" }}></Card.Title>
                  {/* about me text area */}
                  <Card style={{ marginTop: "10px", width: "100%" }}>
                    <div className="form-floating">
                      <textarea
                        // value={description}
                        // onChange={(ev) => setDescription(ev.target.value)}
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        disabled
                      ></textarea>
                      <label for="floatingTextarea">
                        {" "}
                        <i className="fa-regular fa-newspaper"></i>
                        {singleuser?.aboutMe}
                      </label>
                    </div>
                  </Card>
                </Card.Body>
              </Card>
              {/* creating CIPHER MAP */}
              <Card id="ciphermap">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", float: "left" }}>
                    CIPHER MAP
                  </Card.Title>
                  <Card.Title style={{ float: "right" }}></Card.Title>
                  <Graph />
                </Card.Body>
              </Card>

              {/* social media links  */}
              <hr></hr>
              <Card id="theweb">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", float: "left" }}>
                    ON THE WEB
                  </Card.Title>
                  <Card.Title style={{ float: "right" }}></Card.Title>
                  {/* about me text area */}
                  <Card
                    style={{ marginTop: "10px", width: "100%", border: "none" }}
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.gitHub}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-github"></i>&nbsp;
                            {singleuser?.gitHub}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.linkedIn}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-linkedin"></i>
                            &nbsp; {singleuser?.linkedIn}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.faceBook}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-facebook"></i>
                            &nbsp; {singleuser?.faceBook}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.twitter}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-twitter"></i>
                            &nbsp; {singleuser?.twitter}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.instagram}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-instagram"></i>&nbsp;
                            {singleuser?.instagram}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.website}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-solid fa-globe"></i>&nbsp;
                            {singleuser?.website}
                          </label>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Card.Body>
              </Card>
              {/* Proffessional info devision */}
              <Card id="theweb">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", float: "left" }}>
                    PROFESSIONAL INFORMATION
                  </Card.Title>
                  <Card.Title style={{ float: "right" }}></Card.Title>
                  {/* about me text area */}
                  <Card
                    style={{ marginTop: "10px", width: "100%", border: "none" }}
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.highestEducation}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-solid fa-book"></i>&nbsp;
                            {singleuser?.highestEducation}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                          <input
                            // value={location}
                            // onChange={(ev) => setLocation(ev.target.value)}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder={singleuser?.currentStatus}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-solid fa-user-tie"></i>
                            &nbsp; {singleuser?.currentStatus}
                          </label>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Card.Body>
              </Card>
              {/* Intrests devision */}
              <Card id="theweb">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", float: "left" }}>
                    INTERESTS
                  </Card.Title>
                  <Card.Title style={{ float: "right" }}></Card.Title>
                  {/* about me text area */}
                  <Card
                    style={{ marginTop: "10px", width: "100%", border: "none" }}
                  >
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <select
                          className="form-control"
                          // value={location}
                          // onChange={(ev) => setLocation(ev.target.value)}
                          disabled
                        >
                          <option> {singleuser?.intrest1}</option>
                          <option>Web Develoment</option>
                          <option>Python</option>
                          <option>Html</option>
                          <option>Javascript</option>
                          <option>Node.js</option>
                          <option>Bootstrap</option>
                          <option>Mongodb</option>
                          <option>MySql</option>
                        </select>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <select
                          className="form-control"
                          // value={location}
                          // onChange={(ev) => setLocation(ev.target.value)}
                          disabled
                        >
                          <option> {singleuser?.intrest2}</option>
                          <option>Web Develoment</option>
                          <option>Python</option>
                          <option>Html</option>
                          <option>Javascript</option>
                          <option>Node.js</option>
                          <option>Bootstrap</option>
                          <option>Mongodb</option>
                          <option>MySql</option>
                        </select>
                      </div>
                    </div>
                    <br></br>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <select
                          className="form-control"
                          // value={location}
                          // onChange={(ev) => setLocation(ev.target.value)}
                          disabled
                        >
                          <option> {singleuser?.intrest3}</option>
                          <option>Web Develoment</option>
                          <option>Python</option>
                          <option>Html</option>
                          <option>Javascript</option>
                          <option>Node.js</option>
                          <option>Bootstrap</option>
                          <option>Mongodb</option>
                          <option>MySql</option>
                        </select>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <select
                          className="form-control"
                          // value={location}
                          // onChange={(ev) => setLocation(ev.target.value)}
                          disabled
                        >
                          <option> {singleuser?.intrest4}</option>
                          <option>Web Develoment</option>
                          <option>Python</option>
                          <option>Html</option>
                          <option>Javascript</option>
                          <option>Node.js</option>
                          <option>Bootstrap</option>
                          <option>Mongodb</option>
                          <option>MySql</option>
                        </select>
                      </div>
                    </div>
                  </Card>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-12">
              <Card id="leftnavbar1">
                <Nav
                  defaultActiveKey="/profilepage"
                  variant="pills"
                  className="flex-column p-2"
                >
                  <Nav.Link
                    onClick={() => {
                      toprofilepage();
                    }}
                  >
                    <i className="fa-regular fa-user"></i>&nbsp;My Profile
                  </Nav.Link>
                  <Nav.Link eventKey="link-8">
                    <i className="fa-solid fa-table-columns"></i>&nbsp;DashBoard
                  </Nav.Link>
                  <Nav.Link eventKey="link-9">
                    {" "}
                    <i className="fa-solid fa-book"></i>&nbsp;Enrolled Courses
                  </Nav.Link>
                  <Nav.Link
                    eventKey="=link-10"
                    onClick={() => {
                      toupdatepassword();
                    }}
                  >
                    {" "}
                    <i className="fa-solid fa-lock"></i>&nbsp;Change Password
                  </Nav.Link>
                  <Nav.Link
                    eventKey="/updateprofile"
                    onClick={() => {
                      toupdatepage();
                    }}
                  >
                    {" "}
                    <i className="fa-solid fa-pen"></i>&nbsp; Edit Profile
                  </Nav.Link>
                </Nav>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OtherUserProfilepage;
