import { Container, Row, Col } from "react-bootstrap";
import { FeaturedCards } from "./FeaturedCards";
import featuredblog1 from "../assets/img/featuredblog1.jpg";
import featuredblog2 from "../assets/img/featuredblog2.jpg";
import featuredblog3 from "../assets/img/featuredblog3.jpg";
import featuredblog4 from "../assets/img/featuredblog4.jpg";

export const FeaturedBlogs = () => {
  const FeaturedBlogCards = [
    {
      title: "Why I started Blogi",
      description:
        "My name is Jhon Doe and I am the founder of Blogi.Blogi is my passion,which is why I'm so excited...",
      author: "Brooklyn Simmons",
      imgUrl: featuredblog1,
      publish: "Feb 14, 2018",
    },
    {
      title: "Why I started Blogi",
      description:
        "My name is Jhon Doe and I am the founder of Blogi.Blogi is my passion,which is why I'm so excited...",
      author: "Brooklyn Simmons",
      imgUrl: featuredblog2,
      publish: "Feb 14, 2018",
    },
    {
      title: "Why I started Blogi",
      description:
        "My name is Jhon Doe and I am the founder of Blogi.Blogi is my passion,which is why I'm so excited...",
      author: "Brooklyn Simmons",
      imgUrl: featuredblog3,
      publish: "Feb 14, 2018",
    },
    {
      title: "Why I started Blogi",
      description:
        "My name is Jhon Doe and I am the founder of Blogi.Blogi is my passion,which is why I'm so excited...",
      author: "Brooklyn Simmons",
      imgUrl: featuredblog4,
      publish: "Feb 14, 2018",
    },
  ];

  return (
    <section className="featured" id="project">
      <Container>
        <h2>Featured Blogs</h2>
        <Row>
          {FeaturedBlogCards.map((FeaturedBlogCard, index) => {
            return <FeaturedCards key={index} {...FeaturedBlogCard} />;
          })}
        </Row>
        <div className="pagination mt-4 ">
          <a href="#" class="active">
            01
          </a>
          <a href="#">02</a>
          <a href="#">03</a>
          <a href="#">04</a>
          <a href="#">Next</a>
        </div>
      </Container>
    </section>
  );
};
