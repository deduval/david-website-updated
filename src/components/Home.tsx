import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">David Duval</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Engineer & Computer Science Graduate Student
            </h2>
            <p className="hero-description">
              Passionate about creating innovative software solutions and
              leading development teams. Currently pursuing my Master's in
              Computer Science at UNLV while working as a Programmer Analyst at
              Clark County.
            </p>

            <div className="hero-buttons">
              <div className="btn-wrapper">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Me
                </Link>
              </div>
              <div className="btn-wrapper">
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-image fade-in-delay">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>DD</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>David Duval</h3>
                <p>Software Engineer</p>
                <div className="contact-links">
                  <a href="mailto:de.duval6@gmail.com" className="contact-link">
                    <FaEnvelope />
                  </a>
                  <a href="tel:+17027640921" className="contact-link">
                    <FaPhone />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/david-duval-6a0b77184/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
