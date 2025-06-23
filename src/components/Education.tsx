import React from "react";
import { FaUniversity, FaCalendarAlt, FaStar, FaAws } from "react-icons/fa";
import "./Education.css";

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Science: Computer Science",
      institution: "University of Nevada, Las Vegas",
      period: "Aug 2024 - May 2026",
      gpa: "3.7",
      status: "In Progress",
      description:
        "Currently pursuing advanced studies in Computer Science, focusing on cutting-edge technologies and research methodologies.",
      coursework: [
        "Advanced Algorithm Analysis",
        "Cloud Computing",
        "Cryptography",
        "Large Language Models",
        "Software Reengineering",
      ],
    },
    {
      degree: "Bachelor's Degree: Computer Science",
      institution: "University of Nevada, Las Vegas",
      period: "Aug 2018 - Dec 2021",
      gpa: "3.27",
      status: "Completed",
      description:
        "Comprehensive foundation in computer science fundamentals with a strong focus on practical application and problem-solving.",
      coursework: [
        "Data Structures",
        "Object Oriented Programming",
        "Algorithm Analysis",
        "Systems Programming",
        "Discrete Math",
        "Computer Organization",
        "Statistical Methods",
      ],
    },
  ];

  return (
    <div className="education">
      <div className="education-container">
        <div className="education-header fade-in">
          <h1>Education</h1>
          <p className="subtitle">My academic journey and achievements</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-item fade-in-delay"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-card">
                <div className="education-header-card">
                  <div className="degree-info">
                    <h2>{edu.degree}</h2>
                    <div className="institution">
                      <FaUniversity />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="period">
                      <FaCalendarAlt />
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="gpa">
                        <FaStar />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`status-badge ${edu.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {edu.status}
                  </div>
                </div>

                <div className="education-content">
                  <p className="description">{edu.description}</p>

                  <div className="coursework-section">
                    <h3>Relevant Coursework</h3>
                    <div className="coursework-grid">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="course-item">
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-stats fade-in-delay">
          <h2>Academic Achievements</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3.7</div>
              <div className="stat-label">Graduate GPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3.27</div>
              <div className="stat-label">Undergraduate GPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Core CS Courses Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Internships in Undergrad</div>
            </div>
          </div>
        </div>

        <div className="education-certifications fade-in-delay">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="certification-icon">
                <FaAws />
              </div>
              <div className="certification-content">
                <h3>AWS Cloud Practitioner</h3>
                <p>Expires: August 2027</p>
                <p>Amazon Web Services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="education-philosophy fade-in-delay">
          <h2>My Learning Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h3>Continuous Learning</h3>
              <p>
                I believe in lifelong learning and staying current with the
                latest technologies and methodologies in the field of computer
                science.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Practical Application</h3>
              <p>
                I focus on applying theoretical knowledge to real-world
                problems, ensuring that my education translates into practical
                skills.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Teaching & Mentoring</h3>
              <p>
                I value the opportunity to share knowledge and help others
                learn, as demonstrated through my teaching assistant roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
