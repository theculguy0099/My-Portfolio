import React from "react";
import "./Achievements.scss";
import MyPhoto from "./kevin.jpeg";

function AboutMe() {
  const educationPath = [
    {
      year: "2010-2020",
      degree: "Class X",
      institution: "Bhartiya Vidya Bhavan's, Surat",
      score: "Score: 95.2%",
    },
    {
      year: "2020-2022",
      degree: "Class XII",
      institution: "Nalanda Academy, Kota",
      score: "Score: 95.6%",
    },
    {
      year: "2022-2026",
      degree: "B.Tech in Computer Science & Engg.",
      institution: "IIIT Hyderabad",
      score: "Ongoing",
    },
  ];
  const hobbies = [
    "Coding",
    "Public Speaking",
    "Leadership",
    "Team Collaboration",
    "Playing Cricket",
    "Listening to Music",
  ];

  return (
    <div className="about-me">
      <div className="about-header">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="photo-section">
          <img src={MyPhoto} alt="My Photo" className="my-photo" />
          <div className="quick-info">
            <h3>Kevin Thakkar</h3>
            <p>Tech Enthusiast</p>
            <p>Love To Build And Explore New Stuff !!</p>
          </div>
        </div>

        <div className="info-section">
          <div className="bio">
            <h3>Who Am I?</h3>
            <p>
              I am a true tech enthusiast who is deeply passionate about 
              technology and constantly driven by an insatiable curiosity to
              learn and explore. My enthusiasm extends far beyond my
              professional work, encompassing a wide range of technological
              domains. Whether it's emerging programming languages, cutting-edge
              hardware, or revolutionary AI algorithms, I'm always eager to dive
              in and expand my knowledge.
            </p>
          </div>

          <div className="experience">
            <h3>Work Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h4>Web-App Developer at Resolve</h4>
                  <span className="date">January 2024 - May 2024</span>
                  <p>
                    Built a comprehensive complaints resolution platform from
                    scratch, collaborating with the founding team at RESOLVE, a
                    startup at T-HUB, Telangana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education">
            <h3>Education</h3>
            <div className="timeline">
              {educationPath.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <span className="date">{edu.year}</span>
                    <p>{edu.institution}</p>
                    <p className="score">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hobbies">
            <h3>Hobbies & Soft Skills</h3>
            <ul className="hobby-list">
              {hobbies.map((hobby, index) => (
                <li key={index} className="hobby-item">
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
