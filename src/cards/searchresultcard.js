import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function SearchResultCard(props) {
  //use navigate
  const navigate = useNavigate();
  //to navigate to profile
  function seeprofile() {
    navigate(`/otherprofile/${props.userData._id}`);
  }
  return (
    <div>
      <Card className="m-1 shadow-lg" id="cardresult">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          style={{ height: "150px" }}
        />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Card.Img
              variant="top"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "100px",

                border: "3px solid white",
                marginTop: "-35px",
              }}
              src={props.userData.profileImg}
            />
          </div>
          <div className="col-4"></div>
        </div>

        <Card.Body>
          <Card.Title>{props.userData.fullName}</Card.Title>
          <Card.Text>{props.userData.aboutMe}</Card.Text>
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
export default SearchResultCard;
