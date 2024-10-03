import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="blog-website"
              description="A blog website using Node.js, Express.js, and MongoDB offers a robust and scalable platform for content creators and readers. This web application allows users to publish, edit, and manage blog posts with ease."
              ghLink="https://github.com/Abalankit2003/blog-website-backend"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="real-estate marketplace"
              description="I've developed a real-estate marketplace using ReactJS for a dynamic and responsive frontend, NodeJS for the backend server, and MongoDB for storing listings and user data. The platform enables users to easily browse, list, and manage properties with an intuitive interface and seamless interaction"
              ghLink="https://github.com/soumyajit4419/real-estate-marketplace"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Netflix-clone"
              description="I've developed a Netflix clone using ReactJS, creating a sleek and responsive user interface that mimics the popular streaming service. The application features movie browsing, search functionality, and dynamic content loading, delivering a seamless viewing experience."
              ghLink="https://github.com/Abalankit2003/netlix-clone-using-react"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
