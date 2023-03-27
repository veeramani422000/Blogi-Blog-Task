import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

export const ProjectCard = ({ author, description, imgUrl, publish }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div style={{ width: "23rem" }} className="zoomIn">
        <Card.Body>
          <Card.Title>
            <a href="/">
              <img src={imgUrl} alt="imgae" className="img-rounded" />
            </a>
          </Card.Title>
          <Card.Subtitle className="text">{description}</Card.Subtitle>
          <Card.Text className="text-muted">
            By <span className="b1">{author}</span>
            <span className="right">{publish}</span>
          </Card.Text>
        </Card.Body>
      </div>
    </Col>
  );
};
