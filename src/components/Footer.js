import { Container, Row, Col, Button } from "react-bootstrap";
import blogi from "../assets/img/blogi.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import linkedin from "../assets/img/linkedin.png";
import google from "../assets/img/google+.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size={12} sm={2}>
            <img src={blogi} alt="Logo" />
          </Col>
          <Col size={12} sm={2} className="text-center">
            <h5>Product</h5>
            <p>Pricing</p>
            <p>Features</p>
            <p>Security</p>
          </Col>
          <Col size={12} sm={2}>
            <h5>Support</h5>
            <p>Contact</p>
            <p>Platforms</p>
          </Col>
          <Col size={12} sm={2}>
            <h5>legal</h5>

            <p>Terms of Use</p>
            <p>Privacy Popcy</p>
            <p>GDPR</p>
            <p>Cookie Popcy</p>
          </Col>
          <Col size={12} sm={2}>
            <h5>Company</h5>

            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Brand Guidepnes</p>
          </Col>
          <Col size={12} sm={2}>
            <h5>Get It</h5>
            <div>
              <p>Available On Chrome Store</p>
              <button class="button-5" role="button">
                Download Now
              </button>
            </div>
          </Col>
        </Row>
        <hr style={{ color: "#000" }} />
        <Row>
          <Col size={12} sm={6}>
            <p>All Rights are Reserved @Blogi 2023</p>
          </Col>
          <Col size={12} sm={6} className="text-center ">
            <div className="social-icon">
              <a href="#">
                <img src={facebook} alt="Icon" />
              </a>
              <a href="#">
                <img src={twitter} alt="Icon" />
              </a>
              <a href="#">
                <img src={linkedin} alt="Icon" />
              </a>
              <a href="#">
                <img src={google} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
