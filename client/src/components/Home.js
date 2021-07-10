import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = ({ setModalOpen }) => {
  return (
    <>
      <div id="homeContainer">
        <div id="nameCard">
          <h1 id="name">Korey "With a K" Witham</h1>
          <p id="myTitle">
            Junior Web Developer hailing from Vermont who likes angry robot
            noises too much.
          </p>
          <h5
            id="contact"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Contact Me
          </h5>
          <img src="https://placedog.net/75/100" alt="itsa me!" title="doggo" />
        </div>
        <div id="pageCards">
          <Link to="/about">
            <div id="about" className="pageCard">
              <h3>About Me</h3>
            </div>
          </Link>
          <Link to="/hobbies">
            <div id="hobbies" className="pageCard">
              <h3>Hobbies</h3>
            </div>
          </Link>
          <Link to="/portfolio">
            <div id="portfolio" className="pageCard">
              <h3>Portfolio</h3>
            </div>
          </Link>
          <Link to="/workhistory">
            <div id="work" className="pageCard">
              <h3>Work History</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
