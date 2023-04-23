import Card from "react-bootstrap/Card";

function Courses() {
  return (
    <Card body style={{ border: "none" }}>
      <br></br>
      <div className="row">
        <Card.Title style={{ fontSize: "300%", fontWeight: "600" }}>
          Bests are here
        </Card.Title>
        <div className="row">
          <div className="col-md-3 p-4">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "150px" }}
                variant="top"
                src="https://w0.peakpx.com/wallpaper/209/515/HD-wallpaper-python-logo-coding-kod-kodlama-code-mobile-lock-programming-thumbnail.jpg"
              />
              <Card.Body>
                <Card.Title>Complete Python Tutorial </Card.Title>
                <Card.Text>
                  No. of videos: 241 Course time: 27.8 hours
                </Card.Text>
                <span>
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "2px solid white",
                      borderRadius: "30px",
                      float: "left",
                    }}
                    src="https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="prfile pic"
                  />
                </span>
                <Card.Title>Shreya</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 p-4">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "150px" }}
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              />
              <Card.Body>
                <Card.Title>JavaScript (Es 6)</Card.Title>
                <Card.Text>
                  No. of videos: 241 Course time: 27.8 hours
                </Card.Text>
                <span>
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "2px solid white",
                      borderRadius: "30px",
                      float: "left",
                    }}
                    src="https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="prfile pic"
                  />
                </span>
                <Card.Title>Rahul</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 p-4">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "150px" }}
                variant="top"
                src="https://1000logos.net/wp-content/uploads/2022/02/css-logo.jpg"
              />
              <Card.Body>
                <Card.Title>Cascading style sheet</Card.Title>
                <Card.Text>
                  No. of videos: 241 Course time: 27.8 hours
                </Card.Text>
                <span>
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "2px solid white",
                      borderRadius: "30px",
                      float: "left",
                    }}
                    src="https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="prfile pic"
                  />
                </span>
                <Card.Title>Abhishek</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 p-4">
            <Card className="shadow-lg" style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "100%", height: "150px" }}
                variant="top"
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.png"
              />
              <Card.Body>
                <Card.Title>HTML (5)</Card.Title>
                <Card.Text>
                  No. of videos: 241 Course time: 27.8 hours
                </Card.Text>
                <span>
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "2px solid white",
                      borderRadius: "30px",
                      float: "left",
                    }}
                    src="https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="prfile pic"
                  />
                </span>
                <Card.Title>Abhijeet</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Courses;
