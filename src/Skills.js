import React from "react";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        className: "html-icon",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        className: "css-icon",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        className: "js-icon",
      },
      {
        name: "React JS",
        icon: <FaReact />,
        className: "react-icon",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        className: "bootstrap-icon",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        icon: <FaJava />,
        className: "java-icon",
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot />,
        className: "spring-icon",
      },
      {
        name: "REST API",
        icon: "🔗",
        className: "api-icon",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql />,
        className: "mysql-icon",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        className: "mongo-icon",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "VS Code",
        icon: <FaCode />,
        className: "vscode-icon",
      },
      {
        name: "IntelliJ IDEA",
        icon: <FaCode />,
        className: "intellij-icon",
      },
      {
        name: "Eclipse",
        icon: <FaCode />,
        className: "eclipse-icon",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Technical Skills</h1>

      {skillCategories.map((category, index) => (
        <div key={index}>
          <h2 className="skill-heading">{category.title}</h2>

          <div className="skills-container">
            {category.skills.map((skill, i) => (
              <div className="skill-card" key={i}>
                <span className={`icon ${skill.className}`}>
                  {skill.icon}
                </span>

                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;