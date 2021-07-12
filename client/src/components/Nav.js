import { Link } from "react-router-dom";
import React from "react";
import "../styles/Nav.css";

const Nav = (props) => {
  return (
    <div id="navContainer">
      <div id="navLinks" style={{ backgroundColor: "#f05454" }}>
        <Link to="/">
          <button className="button is-large is-link">Home</button>
        </Link>
        <Link to="/about">
          <button className="button is-large is-link">About Me</button>
        </Link>
        <Link to="/hobbies">
          <button className="button is-large is-link">Hobbies</button>
        </Link>
        <Link to="/portfolio">
          <button className="button is-large is-link">Portfolio</button>
        </Link>
        <Link to="/workhistory">
          <button className="button is-large is-link">Work History</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
