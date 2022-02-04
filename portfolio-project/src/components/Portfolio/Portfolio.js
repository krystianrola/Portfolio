import React from "react";
import "./Portfolio.css";
import {  FiLink } from "react-icons/fi";
import Project from "./Project";

function Portfolio({ data }) {
  let projects;

  if (data) {
    projects = data.projects.map(function (project) {
      let projectImage = "images/portfolio/" + project.thumbsnail;
      return (
          <Project title={project.title} imageURL={projectImage} category={project.category}/>
      );
    });
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio_container">
        <h1> Check Out Some Of My Build </h1>

        <div className="portfolio_content"> {projects} </div>
      </div>
    </section>
  );
}

export default Portfolio;
