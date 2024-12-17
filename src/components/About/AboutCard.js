import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Lakshya Porwal </span>
            from Indore, India. A passionate Front-End Developer with expertise
            in <span className="purple">React.js, TypeScript,</span> and{" "}
            <span className="purple">Tailwind CSS</span>. I thrive in building
            responsive, user-focused web applications and love optimizing user
            experiences. Currently, I&apos;m expanding my skills while working
            on innovative projects in an agile environment.
            <br />
            <br />
            Experience:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              &nbsp;&nbsp;
              <span className="purple">Ctruh Technologies</span>&nbsp;&nbsp;
              (August 2024 &#45; Present)
            </li>
            <li className="about-activity">
              <ImPointRight />
              &nbsp; Turbotic Services Pvt. Ltd. &nbsp;&nbsp;(Dec 2023 &#45; May
              2024)
            </li>
            <li className="about-activity">
              <ImPointRight />
              &nbsp; Tech Driven Basics Pvt. Ltd. &nbsp;&nbsp;(Jan 2023 &#45;
              May 2023)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Trust the process." </p>
          <footer className="blockquote-footer">Lakshya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
