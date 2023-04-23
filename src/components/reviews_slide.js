import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import stars from "../images/stars.png";
function ReviewSlide() {
  return (
    <div>
      <Carousel className="forbigscreen" style={{ width: "100%" }}>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
                  <span>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "2px solid white",
                        borderRadius: "30px",
                        float: "left",
                      }}
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="prfile pic"
                    />
                  </span>
                  <Card.Title> Rahul Kumar</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Full Stack Developer
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
                  <span>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "2px solid white",
                        borderRadius: "30px",
                        float: "left",
                      }}
                      src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="prfile pic"
                    />
                  </span>
                  <Card.Title> Naina</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Cascading Style sheet
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
                  <span>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "2px solid white",
                        borderRadius: "30px",
                        float: "left",
                      }}
                      src="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="prfile pic"
                    />
                  </span>
                  <Card.Title> Priya</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    HTML (5)
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
                  <span>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "2px solid white",
                        borderRadius: "30px",
                        float: "left",
                      }}
                      src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                      alt="prfile pic"
                    />
                  </span>
                  <Card.Title> Rakesh </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Javascript{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
                  <span>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "2px solid white",
                        borderRadius: "30px",
                        float: "left",
                      }}
                      src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt="prfile pic"
                    />
                  </span>
                  <Card.Title> Ajay</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">C++</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
                  <span>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "2px solid white",
                        borderRadius: "30px",
                        float: "left",
                      }}
                      src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="prfile pic"
                    />
                  </span>
                  <Card.Title>Akanksha</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Javascript{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
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
                    Node.js
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
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
                  <Card.Title>Upasana</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Node.js
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="m-2" style={{ width: "100%" }}>
                <Card.Body>
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
                  <Card.Title>Amrita</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Node.js
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <img style={{ width: "100%" }} src={stars} alt="stars" />
                </Card.Body>
              </Card>
            </div>
          </div>
          +
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ReviewSlide;
