import React, { useEffect, useState } from "react";
import "./HeroStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloud, FaRocket } from 'react-icons/fa';

function Hero() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-section">
      {/* Animated background elements */}
      <div className="floating-elements">
        <FaCloud className="floating-cloud c1" />
        <FaCloud className="floating-cloud c2" />
        <FaCloud className="floating-cloud c3" />
        <FaCloud className="floating-cloud c4" />
        <div className="gradient-sphere s1"></div>
        <div className="gradient-sphere s2"></div>
      </div>

      <Container className="hero-container">
        <Row className="hero-content">
          <Col lg={12} className={`text-center ${isVisible ? 'fade-in' : ''}`}>
            <div className="badge-wrapper">
              <span className="hero-badge">
                <span className="pulse"></span>
                <span className="badge-text">Telangana's First Cloud Club</span>
              </span>
            </div>

            <h1 className="hero-title">
              Welcome to MJCET's
              <span className="gradient1-text" > AWS Cloud Club</span>
            </h1>

            <p className="hero-description">
              Empowering students with cloud computing skills and AWS expertise.
              Join us in shaping the future of technology.
            </p>

            <div className="hero-cta">
              <a href="https://linktr.ee/awscloudclubmjcet" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="primary-button">
                <span>Join the Club</span>
                <FaRocket className="button-icon" />
              </a>
              <a href="/events" className="events-button">
                <span className="events-button-content">
                  <span className="events-text">Events</span>
                  <span className="events-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" fill="currentColor"/>
                    </svg>
                  </span>
                </span>
                <div className="events-button-borders">
                  <div className="border-1"></div>
                  <div className="border-2"></div>
                  <div className="border-3"></div>
                </div>
              </a>
            </div>

            {/* <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>

      {/* Gradient overlay */}
      <div className="hero-overlay"></div>
    </div>
  );
}

export default Hero;
