import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function TopNavbar() {
  // declarind useNavigate
  const navigate = useNavigate();
  //selector
  const user = useSelector((state) => state.user);

  //function
  const toprofile = () => {
    navigate(`/profilepage/${user._id}`);
  };
  //function
  const tohome = () => {
    navigate("/home");
  };
  //go to search API
  const ToSearch = () => {
    navigate("/search");
  };
  //go to search API
  const Tocommunity = () => {
    navigate("/communitypage");
  };
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          expand={expand}
          style={{
            height: "80px",
            width: "100%",
            position: "fixed",
            top: "0px",
            zIndex: "1",
          }}
          className="mb-3 shadow"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo not found" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="Logo not found" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link
                    onClick={() => {
                      tohome();
                    }}
                    style={{ fontSize: "22px", fontWeight: "600" }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#action2"
                    style={{ fontSize: "22px", fontWeight: "600" }}
                  >
                    Courses
                  </Nav.Link>
                  {localStorage.getItem("token") ? (
                    <Nav.Link
                      onClick={() => {
                        Tocommunity();
                      }}
                      style={{ fontSize: "22px", fontWeight: "600" }}
                    >
                      Community
                    </Nav.Link>
                  ) : (
                    ""
                  )}
                  {localStorage.getItem("token") ? (
                    <Nav.Link
                      className="p-3"
                      onClick={ToSearch}
                      style={{
                        marginRight: "30px",
                        color: "#F3912E",
                        fontSize: "20px",
                      }}
                    >
                      <i className="fa-brands fa-searchengin"></i>Search
                    </Nav.Link>
                  ) : (
                    ""
                  )}
                </Nav>
                <Form className="d-flex">
                  {localStorage.getItem("token") ? (
                    <Nav.Link className="p-3" style={{ fontWeight: "600" }}>
                      <img
                        onClick={() => {
                          toprofile();
                        }}
                        style={{
                          width: "35px",
                          height: "35px",
                          border: "2px solid white",
                          borderRadius: "30px",
                        }}
                        src={user.profileImg}
                        alt="no user"
                      />{" "}
                      {user.fullName}
                    </Nav.Link>
                  ) : (
                    <Button
                      className="form-control mx-5 "
                      style={{
                        height: "40px",
                        width: "160px",
                        borderRadius: "11px",
                        fontWeight: "500",
                        backgroundColor: "#F3912E",
                        border: "none",
                      }}
                    >
                      Explore Courses
                    </Button>
                  )}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TopNavbar;
