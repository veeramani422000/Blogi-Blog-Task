import { Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <h1>Blogs</h1>
          <p>All news about Blogi in one place</p>
        </Row>
      </Container>
    </section>
  );
};
