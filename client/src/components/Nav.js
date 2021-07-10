import { Link } from "react-router-dom";
import React from "react";
import "../styles/Nav.css";

const Nav = (props) => {
  return (

      <div id="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/workhistory">Work History</Link>
      </div>

  );
};

export default Nav;
