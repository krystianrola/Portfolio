import React from "react";
import "./Nav.css"

function Nav() {
  return (
    <nav id="nav_wrapper">
      <ul id="nav" className="nav">
        <li className="current">
          <a href="#home"> Home </a>
        </li>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#resume"> Resume </a>
        </li>
        <li>
          <a href="#portfolio"> Portfolio </a>
        </li>
        <li>
          <a href="#inspirations"> Inspirations </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
