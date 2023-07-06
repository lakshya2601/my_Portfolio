import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import netflix from "../../Assets/Projects/netflix.png";
import budget from "../../Assets/Projects/budget.jpeg";
import make_easy from "../../Assets/Projects/make_easy.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="It is a front-end clone of the Netflix website built with HTML, CSS, JavaScript, and React JS that uses the TMDB database for the backend. It's a frontend implementation of the landing page of the Netflix website."
              ghLink="https://github.com/lakshya2601/Netflix-Clone"
              demoLink="https://netflix-clone-red-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={make_easy}
              isBlog={false}
              title="Make Easy"
              description="Its a Web-based application that enables millions of underprivileged and unorganized blue-collar workers to find local employees directly from employers close to them.
The technology used in this project are HTML, CSS, JavaScript, SCSS.  "
              ghLink="https://github.com/lakshya2601/Make-easy"
              demoLink="https://make-easy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Voice Powered Expense Tracker"
              description="Its a Web-based application, used to track your income and expenses, Makes it easy for you to manage them.It could be operated by Voice Commands and Manual entries.
The technology used in this project are HTML, CSS, JavaScript, React.js, Material UI and Speechly(used for voice traning and voice command application)."
              ghLink="https://github.com/lakshya2601/Voice-Powered-Budget-Tracker"
              demoLink="https://voice-powered-budget-tracker-ifji9una3-lakshya2601.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
