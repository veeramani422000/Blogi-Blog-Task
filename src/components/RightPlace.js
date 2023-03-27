import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import google from "../assets/img/google.png";
import lya from "../assets/img/lya.png";
import airbnb from "../assets/img/airbnb.png";
import uber from "../assets/img/uber.svg";
import santander from "../assets/img/santander.png";
import sony from "../assets/img/sony.png";

export const RightPlace = () => {
  return (
    <section className="rightplace" id="connect">
      <Container>
        <h2>You Are In Right Place</h2>
        <p>some of the best teams are already transforming their management</p>

        <Row className="rpad mt-5 ">
          <Col className="text-sm-end">
            <img src={google} alt="image" className="profile1 " />
          </Col>
          <Col xs={6} className="text-sm-center mt">
            <img src={lya} alt="image" className="profile2" />
          </Col>
          <Col>
            <img src={airbnb} alt="image" className="profile1" />
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col className="text-sm-end">
            <img src={uber} alt="image" className="profile3" />
          </Col>
          <Col xs={5} className="text-sm-center mt">
            <img src={santander} alt="image" className="profile3" />
          </Col>
          <Col>
            <img src={sony} alt="image" className="profile2" />
          </Col>
        </Row>

        <Row>
          <Col size={12} md={12} className="bg">
            <h3>Get notified about our blogs published</h3>
            <div className="wrap ">
              <div className="searchbox">
                <input
                  type="email"
                  className=""
                  placeholder="Your email address..."
                />
                <div className="btn">
                  <strong className="join">Join us</strong>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
