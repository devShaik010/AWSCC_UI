import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import AWSCloudClubLogo from "../../assets/img/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaGraduationCap, FaCloud, FaUsers, FaLink } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <Container className="footer-container">
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-section">
            <div className="footer-brand">
              <img src={AWSCloudClubLogo} alt="AWS Cloud Club Logo" className="footer-logo" />
              <p className="brand-description">
                Empowering students with cloud computing skills and AWS expertise
              </p>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="footer-section links-section">
            <div className="footer-links-grid">
              <div className="links-column">
                <h4 className="footer-heading">Quick Links</h4>
                <div className="footer-links">
                  <NavLink to="/about" className="footer-link">
                    <FaUsers className="link-icon" /> About Us
                  </NavLink>
                  <NavLink to="/events" className="footer-link">
                    <FaCloud className="link-icon" /> Events
                  </NavLink>
                  <NavLink to="/resources" className="footer-link">
                    <FaGraduationCap className="link-icon" /> Resources
                  </NavLink>
                </div>
              </div>

              <div className="links-column">
                <h4 className="footer-heading">Contact</h4>
                <div className="footer-links">
                  <a href="mailto:awscc.mjcet@gmail.com" className="footer-link">
                    <FaEnvelope className="link-icon" /> Email Us
                  </a>
                  <a href="tel:+911234567890" className="footer-link">
                    <FaPhone className="link-icon" /> Call Us
                  </a>
                  <a href="https://linktr.ee/awscloudclubmjcet" className="footer-link">
                    <FaLink className="link-icon" /> Linktree
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="disclaimer">
            This website is managed by AWS Cloud Club MJCET - Hyderabad and is independent of Amazon Web Services, Inc.
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} AWS Cloud Club MJCET. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
