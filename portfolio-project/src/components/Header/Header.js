import React, {useEffect} from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import "./Header.css";
import { FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import {SetBackgroundImageToWindowHeight} from "./init";

function Header({ data }) {
  let name, occupation, description, city, networks;

  useEffect(() => {
    SetBackgroundImageToWindowHeight();
  }, );


  if (data) {
    name = data.name;
    occupation = data.occupation;
    description = data.description;
    city = data.address.city;
    networks = data.socials.map((social) => (
      <li key={social.name}>
        <a href={social.url} target="_blank" rel="noreferrer">
          {
              (social.name === 'Facebook' && <FaFacebookF/>) ||
              (social.name === 'LinkedIn' && <FaLinkedin/> ) ||
              (social.name === 'Instagram' && <FaInstagram/>) ||
              (social.name === 'GitHub' && <FaGithub/>)
          }
        </a>
      </li>
    ));
  }

  return (
    <header className="header" id="home">
      <Nav />
      <Banner 
        name={name}
        occupation={occupation}
        description={description}
        city={city}
        networks={networks}
      />
      {/* <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p> */}
    </header>
  );
}

export default Header;
