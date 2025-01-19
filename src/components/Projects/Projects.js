import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projectNext from "../../Assets/Projects/projectNext.png";
import netflix from "../../Assets/Projects/netflix.png";
import budget from "../../Assets/Projects/budget.jpeg";
import make_easy from "../../Assets/Projects/make_easy.jpeg";
import weather from "../../Assets/Projects/weather.png";
import remote_job_finder from "../../Assets/Projects/remote_job_finder.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Designed and developed a responsive weather application using HTML, CSS, and JavaScript. Utilized third-party APIs to fetch real-time weather data for dynamic content. Demonstrated proficiency in full-stack development by deploying and hosting the application on Vercel for public accessibility. Emphasized attention to detail in creating a visually appealing and user-friendly interface."
              ghLink="https://github.com/lakshya2601/Weather-App"
              demoLink="https://weather-app-nu-beryl-28.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectNext}
              isBlog={false}
              title="NextJS App"
              description="Created a fully responsive web project using Next.js for server-side rendering, TypeScript for type safety, Tailwind CSS for modern styling, and Aceternity UI for sleek components. The design ensures seamless adaptability across mobile, tablet, and desktop devices, delivering a fast, scalable, and user-friendly experience with clean code and a polished interface."
              ghLink="https://github.com/lakshya2601/NextJs-Project"
              demoLink="https://next-js-project-lakshya-porwals-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remote_job_finder}
              isBlog={false}
              title="Remote Job Finder"
              description="This React application simplifies remote job searching using React Query for efficient data fetching and caching, ensuring a responsive user experience. Built with Vite, it offers fast development and optimized production builds. Key features include dynamic job listings, search and filtering, detailed job views, and a bookmarking system. This app showcases modern React development for effortless remote job discovery."
              ghLink="https://github.com/lakshya2601/NextJs-Project"
              demoLink="https://next-js-project-lakshya-porwals-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
