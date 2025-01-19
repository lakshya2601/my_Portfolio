import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <p>
                <br /> Originally from India, I am a passionate Front-End
                Developer with experience in building responsive, user-centric
                web applications. I completed my bachelor's degree in computer
                science at
                <i>
                  <b className="purple">
                    {" "}
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya Indore{" "}
                  </b>
                </i>
                .Being artistic, I enjoy writing poems, reading books & playing
                cricket in my spare time.I enjoy walking and listening to music
                too. I often want to learn something entirely different.
              </p>
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  React.js, Next.js, TypeScript, HTML, CSS, JavaScript, Tailwind
                  CSS, Material UI, GSAP (for animations), Node.js, SQL, GitHub,
                  Chrome DevTools, Responsive Web Design{" "}
                </b>
              </i>
              <br />
              <br />
              The area of my expertise is the development of&nbsp;
              <i>
                <b className="purple">Web Sites </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lakshya2601"
                  target="blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lakshyap2601/"
                  target="blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/lakshya_2601"
                  target="blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
