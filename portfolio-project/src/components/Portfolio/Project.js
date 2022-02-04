import React from "react";
import { FiChevronsDown } from "react-icons/fi";

function Project({ title, imageURL, category }) {
  return (
    <div key={title} className="portfolio_item_content">
      <img alt={title} src={imageURL} />
      <div className="project_overlay">
        <div className="project_meta">
          <h5>{title}</h5>
          <p>{category}</p>
        </div>
      </div>
      <div className="project_icon">
        <FiChevronsDown />
      </div>
    </div>
  );
}

export default Project;
