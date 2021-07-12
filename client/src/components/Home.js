import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setModalOpen }) => {
  return (
    <div className="hero is-fullheight homeBack">
      <div className="hero-body" id="homeContainer">
        <div id="nameCard">
          <div className="columns">
            <div className="column is-8" id="nameMain">
              <div>
                <p className="title is-1">Korey Witham</p>
                <p className="subtitle">
                  Junior Web Developer hailing from Vermont who likes angry
                  robot noises too much.
                </p>
              </div>
              <p
                id="contact"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Contact Me
              </p>
            </div>
            <article className="column">
              <img
                src="https://placedog.net/175/260"
                alt="itsa me!"
                title="doggo"
              />
            </article>
          </div>
        </div>
        <div className="columns is-multiline homeLinks">
          <Link to="/about" className="column is-half pageCard">
            <div>About Me</div>
          </Link>
          <Link to="/hobbies" className="column is-half pageCard">
            <div>Hobbies</div>
          </Link>
          <Link to="/portfolio" className="column is-half pageCard">
            <div>Portfolio</div>
          </Link>
          <Link to="/workhistory" className="column is-half pageCard">
            <div>Work History</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
