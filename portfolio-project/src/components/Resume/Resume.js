import React from "react";
import "./Resume.css";

function Resume({ data }) {
  let skillmessage, work, education, skills;

  if (data) {
    skillmessage = data.skillmessage;

    education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            <em className="title">{education.degree}</em> <span>&bull;</span>{" "}
            {education.graduated}
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            <em className="title"> {work.title}</em>{" "}
            <span>&bull;</span> {work.years}
          </p>
          <p className="work_description">{work.description}</p>
        </div>
      );
    });

    skills = data.skills.map(function (skills) {
      let className = "bar-expand " + skills.name.toLowerCase();

      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <p>{skills.name}</p>
        </li>
      );
    });
  }

  return (
    <section className="resume" id="resume">
      <div className="education">
        <div className="resume_item_header">
          <h1>
            <span> Education </span>
          </h1>
        </div>

        <div className="education_content">
          <div className="education_content_item"> {education} </div>
        </div>
      </div>

      <div className="work">
        <div className="resume_item_header">
          <h1>
            <span> Work </span>
          </h1>
        </div>

        <div className="work_content"> {work} </div>
      </div>

      <div className="skills">
        <div className="resume_item_header">
          <h1>
            <span> Skills </span>
          </h1>
        </div>

        <div className="skills_content">
          <p className="skills_content_message"> {skillmessage} </p>

          <div className="skills_content_bars">
            <ul> {skills} </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
