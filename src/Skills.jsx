import React from "react";
import "./Skills.css"; // CSS file for skills section

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="128" cy="128" r="16" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="12" fill="none">
            <ellipse rx="96" ry="48" cx="128" cy="128" transform="rotate(0 128 128)" />
            <ellipse rx="96" ry="48" cx="128" cy="128" transform="rotate(60 128 128)" />
            <ellipse rx="96" ry="48" cx="128" cy="128" transform="rotate(120 128 128)" />
          </g>
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="128" cy="128" r="128" fill="#339933"/>
          <text x="128" y="160" textAnchor="middle" fontSize="80" fill="white" fontFamily="Arial">N</text>
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="128,0 256,64 220,192 36,192 0,64" fill="#264de4"/>
          <text x="128" y="150" textAnchor="middle" fontSize="60" fill="white" fontFamily="Arial">CSS</text>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="256" height="256" fill="#f7df1e"/>
          <text x="128" y="160" textAnchor="middle" fontSize="70" fill="#000" fontFamily="Arial">JS</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skill-cards">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
