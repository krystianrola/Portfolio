import React from 'react';
import TypeWriter from "react-typewriter";
import "./Banner.css"

function Banner ({name, occupation, description, city, networks}) {
  return (
    <div className='banner'>
        <div className='banner_text'>
            <h1 className='responsive_headline'>
                <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
            </h1>
            <h3>
                Based in {city}. <span>{occupation}</span>. {description}
            </h3>
            <hr />
            <ul className="socials">{networks}</ul>
        </div>
    </div>
  )
}

export default Banner;
