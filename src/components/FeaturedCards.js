import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

export const FeaturedCards = ({
  author,
  description,
  imgUrl,
  publish,
  title,
}) => {
  return (
    <Col size={12} md={6}>
      <div style={{ width: "34rem" }} className="featuredpad">
        <Card.Body>
          <Card.Title>
            <a href="/">
              <img src={imgUrl} alt="imgae" className="img-rounded" />
            </a>
          </Card.Title>
          <Card.Title className="title">
            <h4>{title}</h4>
          </Card.Title>
          <Card.Subtitle className="ftext text-muted">
            {description}
          </Card.Subtitle>
          <Card.Text className="text-muted fpad">
            By <span>{author}</span>
            <span className="right">{publish}</span>
          </Card.Text>
        </Card.Body>
      </div>
    </Col>
  );
};
