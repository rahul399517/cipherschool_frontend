import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function AlluserCard(props) {
  //use navigate
  const navigate = useNavigate();
  //to navigate to profile
  function seeprofile() {
    navigate(`/otherprofile/${props.userData._id}`);
  }
  return (
    <div>
      <Card className="m-1 shadow-lg p-2" id="cardresult">
        <div className="row">
          <div className="col-4">
            <img
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "100px",

                border: "3px solid white",
              }}
              src={props.userData.profileImg}
              alr="Not available"
            />
          </div>
          <div className="col-4">
            {" "}
            <Card.Title>{props.userData.fullName}</Card.Title>
            <Card.Text style={{ fontWeight: "600" }}>
              {props.userData.email}
            </Card.Text>
          </div>
        </div>
        <Card.Text style={{ fontWeight: "600" }}>
          {props.userData.aboutMe}
        </Card.Text>
        <h4>Intrest</h4>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Card className="m-2" style={{ border: "1px solid #F3912E" }}>
              <Card.Body> {props.userData.intrest1}</Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-sm-12">
            <Card className="m-2" style={{ border: "1px solid #F3912E" }}>
              <Card.Body> {props.userData.intrest2}</Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Card className="m-2" style={{ border: "1px solid #F3912E" }}>
              <Card.Body> {props.userData.intrest3}</Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-sm-12">
            <Card className="m-2" style={{ border: "1px solid #F3912E" }}>
              <Card.Body> {props.userData.intrest4}</Card.Body>
            </Card>
          </div>
        </div>
        <Card.Body>
          <Button
            onClick={() => {
              seeprofile();
            }}
            style={{ width: "100%" }}
            variant="dark"
          >
            view profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default AlluserCard;
