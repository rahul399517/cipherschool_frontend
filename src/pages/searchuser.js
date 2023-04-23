import Nav from "react-bootstrap/Nav";
import { Card } from "react-bootstrap/esm";
import Button from "react-bootstrap/Button";
import "./profilepage.css";
import "./searchuser.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../config";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SearchResultCard from "../cards/searchresultcard";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
function SearchUser() {
  //useparams
  const params = useParams();
  //declaring dispatch
  const dispatch = useDispatch();
  //selector
  const user = useSelector((state) => state.user);
  // declarind useNavigate
  const navigate = useNavigate();
  //toprofilepage
  const toprofilepage = () => {
    navigate(`/profilepage/${user._id}`);
  };
  //API call for logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
    dispatch({ type: "LOGOUT" });
    navigate("/home");
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
  // ............................. SEARCH FUNCTIONALITY................................

  //search API // By default have all products
  const [allusers, setAllUsers] = useState([]);

  //Connecting the search API
  const searchHandle = async (event) => {
    // console.warn(event.target.value);
    let key = event.target.value;
    let result = await fetch(`${API_BASE_URL}/search/${key}`);
    result = await result.json();
    if (result) {
      navigate("/search");
      setAllUsers(result);
    }
    /*else {
       navigate("/home");
     }*/
  };
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
                  href="/home"
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
              <Card className="p-1" id="passform2">
                <div
                  className="form-floating mb-3"
                  style={{ marginTop: "90px" }}
                >
                  <input
                    onChange={searchHandle}
                    type="text"
                    className="form-control shadow-lg"
                    id="floatingInput"
                    placeholder="Search Here...."
                  />
                  <label for="floatingInput">
                    &nbsp;{" "}
                    <i className="fa-solid fa-magnifying-glass">&nbsp;</i>
                    Search User
                  </label>
                </div>
                <br></br>
                {allusers
                  .map((user) => {
                    return (
                      <div
                        className="col-md-7 col-sm-12"
                        id="productspace"
                        key={user._id}
                      >
                        {" "}
                        <SearchResultCard userData={user} />{" "}
                      </div>
                    );
                  })
                  .reverse()}
                <img
                  id="kitty"
                  style={{ width: "50%", height: "50%" }}
                  src="https://images.squarespace-cdn.com/content/v1/54ac32ece4b010b9ae3df456/1582066388308-ISH0M7BEAZZXK2SJ7C41/cg00%23%23-laserpointer-FLASH-v0001ForGif.gif"
                  alt="not available"
                />
              </Card>
            </div>
            <div className="col-md-3 col-sm-12">
              <Card id="leftnavbar">
                <Nav
                  defaultActiveKey="/profilepage"
                  variant="pills"
                  className="flex-column p-2"
                >
                  <Nav.Link href="/profilepage">
                    <i className="fa-regular fa-user"></i>&nbsp;My Profile
                  </Nav.Link>
                  <Nav.Link eventKey="link-8">
                    <i className="fa-solid fa-table-columns"></i>&nbsp;DashBoard
                  </Nav.Link>
                  <Nav.Link eventKey="link-9">
                    {" "}
                    <i className="fa-solid fa-book"></i>&nbsp;Enrolled Courses
                  </Nav.Link>
                  <Nav.Link eventKey="link-10">
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
export default SearchUser;
