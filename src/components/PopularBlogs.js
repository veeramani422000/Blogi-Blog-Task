import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import { ProjectCard } from "./ProjectCard";

export const PopularBlogs = () => {
  const projects = [
    {
      author: "Mitchal",
      description: "Don't miss a single match this season whether it's an away",
      imgUrl: img1,
      publish: "1h ago",
    },
    {
      author: "Mitchal",
      description: "Game or international tournament,Whether it's an away",
      imgUrl: img2,
      publish: "2h ago",
    },
    {
      author: "Mitchal",
      description: "Download to start streaming all major leagues,buffer-free.",
      imgUrl: img3,
      publish: "10 mint ago",
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <h2>Popular Blogs</h2>
        <Row>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
        <Row className="mt-5">
          <Col md={8} className="bgcolor">
            <Col size={8} md={11}>
              <h1>Why I started Blogi</h1>
              <p>
                My name is Jhon Doe and I am the founder of Blogi.Blogi is my
                passion,which is why I'm so excited to launch this new
                product...
              </p>
              <div className="leftpad">
                <img src={img5} alt="image" className="profile" />
                <div className="ab">
                  <p>
                    Robert Fox <br />
                    Feb 14, 2018
                  </p>
                </div>
              </div>
            </Col>
          </Col>
          <Col md={4} className="bgyello">
            <img src={img4} alt="image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
