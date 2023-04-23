import Nav from "react-bootstrap/Nav";
import { Card } from "react-bootstrap/esm";
import Button from "react-bootstrap/Button";
import "./profilepage.css";
import "./searchuser.css";
import "./communitypage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../config";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import AlluserCard from "../cards/alluserCard";
import Sidecommunitycard from "../cards/side_community_option";
import "./changepasscode.css";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
function CommunityPage() {
  //useparams
  const params = useParams();
  //declaring dispatch
  const dispatch = useDispatch();
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
                // defaultActiveKey="/profilepage"
                variant="pills"
                className="flex-column "
                id="sidenavbar"
              >
                <Nav.Link
                 onClivk={()=>{tohome()}}
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
                  // eventKey="/profilepage"
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
                <Card.Body></Card.Body>
              </Card>
            </div>
          </div>

          {/* user details Devisions*/}
          <div className="row">
            <div className="col-md-1 col-sm-2"></div>
            <div className="col-md-8 col-sm-10">
              <Card className="p-1" id="passform3">
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
                          <AlluserCard userData={user} />{" "}
                        </span>{" "}
                      </div>
                    );
                  })
                  .reverse()}
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
    </div>
  );
}
export default CommunityPage;
