import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.css";

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: "Programmer Analyst II",
      company: "Clark County",
      location: "Las Vegas, NV",
      period: "Oct 2022 - Present",
      duration: "2+ years",
      description:
        "Leading development of responsive front-end applications and managing enterprise software solutions.",
      achievements: [
        "Spearheaded the development of responsive front-end applications, ensuring seamless alignment with business requirements",
        "Successfully deployed IBM websphere applications to various QA and Production environments, effectively managing multiple code streams for each environment",
        "Led the implementation of unit testing and successfully increased test coverage from 0% to 80% on all maintained applications, resulting in improved software quality and faster issue detection",
        "Developed SQL queries and reports to extract and analyze data from large databases, leading to actionable insights that informed business decisions",
      ],
      technologies: [
        "React",
        "TypeScript",
        "IBM WebSphere",
        "SQL",
        "Jest",
        "Agile",
      ],
    },
    {
      title: "Software Engineer",
      company: "Credit One Bank",
      location: "Las Vegas, NV",
      period: "Jan 2022 - Sep 2022",
      duration: "9 months",
      description:
        "Led front-end development for banking applications with focus on user experience and cross-platform compatibility.",
      achievements: [
        "Led the development of a seamless post-login banking experience for both desktop and mobile platforms as the lead front-end engineer, ensuring a high-quality user experience and adherence to best practices",
        "Collaborated closely with cross-functional teams, including designers, enterprise architects, product owners, back-end developers, and stakeholders, to deliver end-to-end external facing applications that met business requirements and user needs",
        "Utilized Figma to follow design and prototype of user interfaces, ensuring consistency in design patterns across applications",
      ],
      technologies: [
        "React",
        "React Native",
        "Figma",
        "Agile",
        "Cross-platform Development",
      ],
    },
    {
      title: "Teaching Assistant / Lab Instructor",
      company: "University of Nevada, Las Vegas",
      location: "Las Vegas, NV",
      period: "Aug 2021 - Dec 2021",
      duration: "5 months",
      description:
        "Supported faculty in teaching algorithm analysis and engineering principles to undergraduate students.",
      achievements: [
        "Led lab sessions and held office hours, offering guidance on algorithm design, problem-solving, and engineering principles to enhance student understanding",
        "Graded assignments and exams, ensuring accurate assessment of student performance while providing constructive feedback",
        "Collaborated with faculty to develop course materials and assignments, helping to reinforce core concepts in Algorithm Analysis and Intro to Engineering",
      ],
      technologies: ["C++", "Java", "Python", "Algorithm Analysis", "Teaching"],
    },
    {
      title: "Software Engineer Intern",
      company: "JT4",
      location: "Las Vegas, NV",
      period: "Jun 2021 - Aug 2021",
      duration: "3 months",
      description:
        "Developed web applications for internal business processes and HR operations.",
      achievements: [
        "Developed a front-end web application using Blazor, resulting in an efficient and user-friendly tool for HR to randomly select employees for drug testing",
        "Worked closely with the HR team to understand their needs and requirements for the drug testing application, resulting in a solution that met their expectations and improved their workflow",
      ],
      technologies: ["Blazor", ".NET", "C#", "Web Development"],
    },
    {
      title: "Accessibility Engineer Intern",
      company: "UNLV - Geoscience Department",
      location: "Las Vegas, NV",
      period: "Oct 2020 - Apr 2021",
      duration: "7 months",
      description:
        "Conducted accessibility audits and implemented WCAG compliance features for .NET applications.",
      achievements: [
        "Worked with the Forest Inventory and Analysis team to conduct a comprehensive accessibility audit of a .NET application, resulting in a detailed report that identified accessibility issues and proposed solutions to improve compliance with WCAG guidelines",
        "Implemented accessibility features and make necessary changes to the front-end of the application, ensuring that it met accessibility standards and was usable by all users",
      ],
      technologies: [".NET", "WCAG", "Accessibility", "Front-end Development"],
    },
    {
      title: "Software Engineer Intern",
      company: "Westinis Inc.",
      location: "Las Vegas, NV",
      period: "Apr 2020 - Aug 2020",
      duration: "5 months",
      description:
        "Built backend services and optimized front-end applications for mobile devices.",
      achievements: [
        "Built .NET Core services to automate the insertion of data from third-party APIs into a database",
        "Optimized front-end layout and functionality for mobile devices to improve user experience",
      ],
      technologies: [
        ".NET Core",
        "API Integration",
        "Mobile Optimization",
        "Database",
      ],
    },
    {
      title: "Coding Instructor",
      company: "ID Tech",
      location: "Las Vegas, NV",
      period: "May 2019 - Aug 2019",
      duration: "4 months",
      description:
        "Taught programming fundamentals to students in a summer camp environment.",
      achievements: [
        "Prepared lesson plans to follow curriculum standards established by the summer camp",
        "Taught programming fundamentals in C++, Java, and Python",
        "Managed 8-10 students per week as they worked on programming projects",
        "Led diploma ceremony each week to commemorate student achievements to parents",
      ],
      technologies: [
        "C++",
        "Java",
        "Python",
        "Teaching",
        "Curriculum Development",
      ],
    },
  ];

  return (
    <div className="experience">
      <div className="experience-container">
        <div className="experience-header fade-in">
          <h1>Work Experience</h1>
          <p className="subtitle">My professional journey and career growth</p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((job, index) => (
            <div
              key={index}
              className="experience-item fade-in-delay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="experience-card">
                <div className="experience-header-card">
                  <div className="job-info">
                    <h2>{job.title}</h2>
                    <div className="company">
                      <FaBriefcase />
                      <span>{job.company}</span>
                    </div>
                    <div className="location">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                    <div className="period">
                      <FaCalendarAlt />
                      <span>{job.period}</span>
                      <span className="duration">({job.duration})</span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="description">{job.description}</p>

                  <div className="achievements-section">
                    <h3>Key Achievements</h3>
                    <ul className="achievements-list">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies-section">
                    <h3>Technologies & Skills</h3>
                    <div className="technologies-grid">
                      {job.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tech-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary fade-in-delay">
          <h2>Career Highlights</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-number">3+</div>
              <div className="summary-label">Years of Experience</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">7</div>
              <div className="summary-label">Companies Worked For</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">4</div>
              <div className="summary-label">Internships Completed</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">2</div>
              <div className="summary-label">Teaching Positions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
