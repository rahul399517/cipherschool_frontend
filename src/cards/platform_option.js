import { Button } from "bootstrap";
import Card from "react-bootstrap/Card";
import "./platform_option.css";
const Platform = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 p-5">
        <Card className="bg-dark text-white" style={{ border: "none" }}>
          <Card.Img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Card image"
          />
          <Card.ImgOverlay id="overlay">
            <Card.Text id="subtitle">
              Unlock your learning potential with CipherSchools
            </Card.Text>
            <Card.Title id="title">Best platform for the students</Card.Title>

            <button id="blurbutton" className="form-control">
              For Students &nbsp;<i className="fa-solid fa-graduation-cap"></i>
            </button>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div className="col-md-6 col-sm-12 p-4">
        <Card className="bg-dark text-white" style={{ border: "none" }}>
          <Card.Img
            src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Card image"
          />
          <Card.ImgOverlay id="overlay">
            <Card.Text id="subtitle">
              Empowering students to open their minds to utmost knowledge
            </Card.Text>
            <Card.Title id="title">Be the mentor you never had</Card.Title>

            <button id="blurbutton" className="form-control">
              For Creators &nbsp;<i className="fa-solid fa-ghost"></i>
            </button>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};
export default Platform;
