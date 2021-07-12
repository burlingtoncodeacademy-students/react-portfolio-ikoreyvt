import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Portfolio = (props) => {
  return (
    <div className="hero " style={{ backgroundColor: "#243c53" }}>
      <Nav />
      <div className="hero-body ">
        <div className="section" style={{ backgroundColor: "#DDDDDD" }}>
          <p className="title has-text-black">Portfolio</p>
          <p className="subtitle has-text-black">
            Herein lies my person Git library. Feast your eyes upon it's great
            size!
          </p>
          <ul>
            <a href="https://github.com/ikoreyvt/example/blob/master/example.txt">
              <li>Example</li>
            </a>
          </ul>
        </div>
        <div
          className="box"
          style={{ backgroundColor: "#DDDDDD", marginTop: "1rem" }}
        >
          <p className="title is-2 has-text-black">
            Here are a few project I've made in class for projects
          </p>
          <div className="columns is-multiline is-center">
            <div className="column is-half">
              <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-ikoreyvt">
                <img
                  src="../images/guess_number.png"
                  alt="guess the number screenshot"
                />
              </a>
            </div>
            <div className="column is-half">
              <a href="https://github.com/burlingtoncodeacademy-students/zorkington-ikoreyvt">
                <img
                  src="../images/zorkington.png"
                  alt="zorkington screenshot"
                />
              </a>
            </div>
            <div className="column is-half">
              <a href="https://github.com/burlingtoncodeacademy-students/tic-tac-toe-ikoreyvt">
                <img
                  src="../images/tictactoe.png"
                  alt="tic tac toe screenshot"
                />
              </a>
            </div>
            <div className="column is-half">
              <a href="https://github.com/burlingtoncodeacademy-students/react-portfolio-ikoreyvt">
                <img src="../images/portfolio.png" alt="portfolio screenshot" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Portfolio;
