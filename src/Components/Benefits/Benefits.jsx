import React from 'react';
import "./Benefits.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaCloud, FaGlobe, FaLightbulb } from 'react-icons/fa';

function Benefits() {
  const benefits = [
    {
      icon: <FaCertificate />,
      title: "AWS Certifications",
      description: "Get certified with guided preparation and study resources",
      gradient: "gradient-1"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Projects",
      description: "Build real-world projects using AWS services",
      gradient: "gradient-2"
    },
    {
      icon: <FaGlobe />,
      title: "Global Network",
      description: "Connect with cloud enthusiasts worldwide",
      gradient: "gradient-3"
    },
    {
      icon: <FaLightbulb />,
      title: "Industry Guidance",
      description: "Learn from experienced AWS professionals",
      gradient: "gradient-4"
    }
  ];

  return (
    <section id='benefits' className='benefits-section'>
      <div className="benefits-bg">
        <div className="light-effect le1"></div>
        <div className="light-effect le2"></div>
      </div>

      <Container>
        <div className="section-header">
          <div className="title-wrapper">
            <span className="title-accent"></span>
            <h2 className="section-title">Club Benefits</h2>
            <span className="title-accent"></span>
          </div>
          <p className="section-subtitle">
            Empowering your cloud journey with exclusive resources and opportunities
          </p>
        </div>

        <Row className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Col key={index} lg={3} md={6} className="benefit-col">
              <div className={`benefit-card ${benefit.gradient}`}>
                <div className="card-content">
                  <div className="icon-wrapper">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
                <div className="card-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="benefits-footer">
          <p className="gradient-text">And many more exciting opportunities...</p>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;