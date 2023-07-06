import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lakshya Porwal </span>
            from <span className="purple"> Indore , India.</span>
            <br />I am pursuing bachelor's in Computer Science in SVVV,Indore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
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
