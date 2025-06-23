import React from "react";
import { FaGraduationCap, FaCode, FaUsers, FaEye } from "react-icons/fa";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-header fade-in">
          <h1>About Me</h1>
          <p className="subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text fade-in-delay">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate Software Engineer with over 3 years of experience
              in developing innovative software solutions. Currently, I'm
              pursuing my Master's degree in Computer Science at the University
              of Nevada, Las Vegas while working as a Programmer Analyst at Clark
              County.
            </p>

            <p>
              My journey in technology began with a strong foundation in
              Computer Science, where I developed a deep understanding of data
              structures, algorithms, and software engineering principles. I've
              always been driven by the challenge of solving complex problems
              and creating solutions that make a real impact.
            </p>

            <p>
              As someone who is legally blind, I have a unique perspective on
              user experience and accessibility. I'm passionate about creating
              inclusive, accessible software that works for everyone. I believe
              that good design should be pleasant, intuitive, and accessible to
              users of all abilities.
            </p>
          </div>

          <div className="about-highlights fade-in-delay">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
              <p>Master's in Computer Science from UNLV</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaCode />
              </div>
              <h3>Experience</h3>
              <p>3+ years in software development</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaUsers />
              </div>
              <h3>Leadership</h3>
              <p>Led development teams and projects</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaEye />
              </div>
              <h3>Accessibility</h3>
              <p>Passionate about inclusive design</p>
            </div>
          </div>
        </div>

        <div className="about-values fade-in-delay">
          <h2>My Values & Approach</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality First</h3>
              <p>
                I believe in writing clean, maintainable code and implementing
                comprehensive testing strategies.
              </p>
            </div>

            <div className="value-item">
              <h3>Accessibility & Inclusion</h3>
              <p>
                I'm passionate about creating software that's accessible to
                everyone. My personal experience drives me to ensure that all
                users, regardless of ability, can effectively use the
                applications I build.
              </p>
            </div>

            <div className="value-item">
              <h3>User-Centered Design</h3>
              <p>
                I focus on creating intuitive user experiences that solve real
                problems. My work spans both desktop and mobile platforms with
                accessibility and usability in mind.
              </p>
            </div>

            <div className="value-item">
              <h3>Continuous Learning</h3>
              <p>
                I'm always exploring new technologies and methodologies.
                Currently pursuing advanced studies while staying current with
                industry best practices.
              </p>
            </div>

            <div className="value-item">
              <h3>Collaboration</h3>
              <p>
                I thrive in cross-functional teams, working closely with
                designers, architects, and stakeholders to deliver exceptional
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
