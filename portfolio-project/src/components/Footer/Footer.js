import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";

function Footer({ data }) {
  let name, networks;

  if (data) {
    name = data.name;
    networks = data.socials.map((social) => (
      <li key={social.name}>
        <a href={social.url} target="_blank" rel="noreferrer">
          {(social.name === "Facebook" && <FaFacebookF />) ||
            (social.name === "LinkedIn" && <FaLinkedin />) ||
            (social.name === "Instagram" && <FaInstagram />) ||
            (social.name === "GitHub" && <FaGithub />)}
        </a>
      </li>
    ));
  }

  return (
    <footer className="footer">
      <div>
        <div className="footer_networks">
          <ul className="socials">{networks}</ul>
          
          <p className="copyright">Made By {name}.</p>
          
        </div>
        <div id="go_to_top">
          <a href="#home" className="smoothscroll" title="Back to top">
            <FiChevronsUp className="go_to_top_icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
