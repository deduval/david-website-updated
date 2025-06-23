import React from "react";
import { FaCode, FaTools, FaUsers, FaLaptopCode } from "react-icons/fa";
import "./Skills.css";

const Skills: React.FC = () => {
  const skillsData = {
    languages: [
      { name: "React", icon: "⚛️" },
      { name: "React Native", icon: "📱" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🟨" },
      { name: "C++", icon: "🔵" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C#", icon: "🔷" },
    ],
    frameworks: [
      { name: "Jest/Enzyme", icon: "🧪" },
      { name: ".NET", icon: "🟦" },
      { name: "Node.js", icon: "🟢" },
    ],
    tools: [
      { name: "Git", icon: "📚" },
      { name: "GitHub", icon: "🐙" },
      { name: "IBM WebSphere", icon: "🟦" },
      { name: "Postman", icon: "📮" },
      { name: "Toad", icon: "🐸" },
    ],
    methodologies: [
      { name: "Agile", icon: "🔄" },
      { name: "Waterfall", icon: "🌊" },
      { name: "SDLC", icon: "🔄" },
      { name: "Test-Driven Development", icon: "🧪" },
    ],
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: skillsData.languages,
      color: "#ffd700",
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaLaptopCode />,
      skills: skillsData.frameworks,
      color: "#ffed4e",
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: skillsData.tools,
      color: "#ffd700",
    },
    {
      title: "Methodologies",
      icon: <FaUsers />,
      skills: skillsData.methodologies,
      color: "#ffed4e",
    },
  ];

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-header fade-in">
          <h1>Skills & Expertise</h1>
          <p className="subtitle">
            My technical skills and professional competencies
          </p>
        </div>

        <div className="skills-overview">
          <div className="overview-card fade-in-delay">
            <h2>Technical Proficiency</h2>
            <p>
              With over 3 years of experience in software development, I've
              developed expertise in modern web technologies, mobile
              development, and enterprise software solutions. My skills span
              from front-end frameworks to backend development and database
              management.
            </p>
          </div>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category fade-in-delay"
              style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item fade-in-delay"
                    style={{ animationDelay: `${0.4 + skillIndex * 0.05}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights fade-in-delay">
          <h2>Key Strengths</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>Frontend Development</h3>
              <p>
                Expert in React, React Native, and TypeScript with focus on
                responsive design and user experience.
              </p>
            </div>
            <div className="highlight-item">
              <h3>Testing & Quality</h3>
              <p>
                Proficient in Jest/Enzyme testing with experience increasing
                test coverage from 0% to 80%.
              </p>
            </div>
            <div className="highlight-item">
              <h3>Enterprise Solutions</h3>
              <p>
                Experience with IBM WebSphere, .NET applications, and
                large-scale database management.
              </p>
            </div>
            <div className="highlight-item">
              <h3>Team Collaboration</h3>
              <p>
                Strong experience in Agile methodologies and cross-functional
                team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
