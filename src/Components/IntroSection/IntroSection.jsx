import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamImage from "../../assets/img/team.jpg";
import Logo from "../../assets/img/logo.png";
import "./IntroSection.css";

function IntroSection() {
  return (
    <section id="intro" className="intro-section">
      {/* Animated Background Lights */}
      <div className="light-effects">
        <div className="light light1"></div>
        <div className="light light2"></div>
        <div className="light light3"></div>
      </div>

      <Container>
        <Row className="align-items-center main-content-row">
          <Col lg={6} className="intro-content">
            <div className="logo-wrapper">
              <img src={Logo} alt="AWS Cloud Club Logo" className="aws-logo" />
            </div>
            
            <h2 className="section-title">
              Building Tomorrow's Tech Leaders Today
            </h2>

            <div className="intro-description">
              <p>
                MJCET's premier tech community fostering innovation and technical excellence. 
                We bring together passionate students to explore cloud technologies, collaborate 
                on projects, and build the future of tech. As Telangana's first AWS Cloud Club, 
                we provide hands-on learning experiences, certification support, and networking 
                opportunities to help students excel in cloud computing.
              </p>
            </div>
          </Col>

          <Col lg={6} className="team-image-column">
            <div className="team-image-wrapper">
              <img src={TeamImage} className="team-image" alt="AWS Cloud Club MJCET Team" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default IntroSection;
