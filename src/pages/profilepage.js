import Nav from "react-bootstrap/Nav";
import { Card } from "react-bootstrap/esm";
import Button from "react-bootstrap/Button";
import "./profilepage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import Sidecommunitycard from "../cards/side_community_option";
import "./changepasscode.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../config";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import Graph from "./graph";

function Profilepage() {
  //useparams
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

  //  ..........................To show followers................................................

  // for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //for retrieving data
  const [followers, setFollowers] = useState([]);

  const fetchFollowers = () => {
    axios
      .get(`${API_BASE_URL}/followers/${params.id}`)
      .then((response) => {
        setFollowers(response.data.followers);
        console.log(response);
        console.log(user._id);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFollowers();
  }, []);
  //  ..........................To show following................................................
  const [showfollowing, setShowFollowing] = useState(false);

  const handleCloseFollowing = () => setShowFollowing(false);
  const handleShowFollowing = () => setShowFollowing(true);

  //for retrieving data
  const [following, setFollowing] = useState([]);

  const fetchFollowing = () => {
    axios
      .get(`${API_BASE_URL}/following/${params.id}`)
      .then((response) => {
        setFollowing(response.data.following);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFollowing();
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
                          src={user.profileImg}
                          alt="prfile pic"
                        />
                      </span>
                      <Card.Title id="greeting">
                        Hello,{user.fullName}
                      </Card.Title>
                      <br></br>
                      <Card.Subtitle className="mb-2 text-muted" id="email">
                        {user.email}
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
                                onClick={handleShow}
                                className="form-control"
                                style={{
                                  border: " 1px  solid #F3912E",

                                  backgroundColor: "white",
                                  color: "#4169e1",
                                  fontWeight: "700",
                                }}
                              >
                                {user.followers?.length}
                                <br></br>Followers
                              </Button>
                            </div>
                            <div className="col-6">
                              <Button
                                onClick={handleShowFollowing}
                                className="form-control"
                                style={{
                                  border: " 1px  solid #F3912E",
                                  backgroundColor: "white",
                                  color: "#4169e1",
                                  fontWeight: "700",
                                }}
                              >
                                {user.following?.length}
                                <br></br>Following
                              </Button>
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
              <Card id="aboutme">
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
                        rows={15}
                        disabled
                      ></textarea>
                      <label for="floatingTextarea">
                        {" "}
                        <i className="fa-regular fa-newspaper"></i>
                        {user.aboutMe}
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
                  {/* about me text area */}
                  <Card style={{ marginTop: "10px", width: "100%" }}>
                    <Graph />
                  </Card>
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
                            placeholder={user.gitHub}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-github"></i>&nbsp;
                            {user.gitHub}
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
                            placeholder={user.linkedIn}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-linkedin"></i>
                            &nbsp;{user.linkedIn}
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
                            placeholder={user.faceBook}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-facebook"></i>
                            &nbsp;{user.faceBook}
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
                            placeholder={user.twitter}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-twitter"></i>
                            &nbsp;{user.twitter}
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
                            placeholder={user.instagram}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-brands fa-instagram"></i>&nbsp;
                            {user.instagram}
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
                            placeholder={user.website}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-solid fa-globe"></i>&nbsp;
                            {user.website}
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
                            placeholder={user.highestEducation}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-solid fa-book"></i>&nbsp;
                            {user.highestEducation}
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
                            placeholder={user.currentStatus}
                            disabled
                          />
                          <label for="floatingInput">
                            <i className="fa-solid fa-user-tie"></i>
                            &nbsp;{user.currentStatus}
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
                          <option>{user.intrest1}</option>
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
                          <option>{user.intrest2}</option>
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
                          <option>{user.intrest3}</option>
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
                          <option>{user.intrest4}</option>
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
              <Card id="leftnavbar">
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
              <Card style={{ height: "auto" }} id="passform4">
                <Card.Title>Community</Card.Title>
                <Card.Body>
                  {/* Adding following card  */}

                  {allusers
                    .map((user) => {
                      return (
                        <div
                          className="col-md-12 col-sm-12 "
                          id="productspace"
                          key={user._id}
                        >
                          <span>
                            {" "}
                            <Sidecommunitycard userData={user} />{" "}
                          </span>{" "}
                        </div>
                      );
                    })
                    .reverse()}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/*   To Show Followers Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title>My Followers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {followers.length === 0 ? (
            <p>No followers found.</p>
          ) : (
            <ul>
              {followers.map((follower) => (
                <Card className="m-1 shadow  p-2" id="cardresult">
                  <div className="row">
                    <div className="col-2">
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100px",

                          border: "3px solid white",
                          float: "left",
                        }}
                        src={follower.profileImg}
                        alt="profile pic"
                      />
                    </div>
                    <div className="col-4" style={{ fontWeight: "600" }}>
                      {follower.fullName}
                    </div>
                    <div className="col-6 ">
                      <Button
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          color: "black",
                        }}
                      >
                        {follower.email}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </ul>
          )}
        </Modal.Body>
      </Modal>
      {/*   To Show Followings Modal  */}
      <Modal show={showfollowing} onHide={handleCloseFollowing}>
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title>Followings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {following?.length === 0 ? (
            <p>No followers found.</p>
          ) : (
            <ul>
              {following.map((following) => (
                <Card className="m-1 shadow  p-2" id="cardresult">
                  <div className="row">
                    <div className="col-2">
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "100px",

                          border: "3px solid white",
                          float: "left",
                        }}
                        src={following.profileImg}
                        alt="profile pic"
                      />
                    </div>
                    <div className="col-4" style={{ fontWeight: "600" }}>
                      {following.fullName}
                    </div>
                    <div className="col-6 ">
                      <Button
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          color: "black",
                        }}
                      >
                        {following.email}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </ul>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Profilepage;
