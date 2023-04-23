import Card from "react-bootstrap/Card";
import ReviewSlide from "../components/reviews_slide";
function Review() {
  return (
    <div className="p-5" style={{ backgroundColor: "#353A42" }}>
      <div className="row">
        {/* adding the review heading  */}
        <Card body style={{ backgroundColor: "#353A42", border: "none" }}>
          <Card.Text
            style={{
              color: "#F3912E",
              fontWeight: "700",
              fontSize: "17px",
              float: "left",
            }}
          >
            Students LIVE Feedback
          </Card.Text>
          <br></br>
          <Card.Title
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "300%",
              position: "relative",
              left: "0px",
            }}
          >
            We love to read them
          </Card.Title>
          <Card.Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "17px",

              float: "left",
            }}
          >
            feedback is a significant component of our success because it
            inspires us to get better and meet the expectations of our students.
          </Card.Text>
        </Card>
        <div className="row">
          {/* creating the carausal */}
          <ReviewSlide />
        </div>
      </div>
    </div>
  );
}
export default Review;
