import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

/* 
Build a page (or component) that includes basic details about your history as a person such as:
  ---What interests you
  ---Where you grew up
  ---Why you got into programming 
  */
const About = (props) => {

  return (
    <div className="hero is-fullheight" style={{backgroundColor: "#30475E"}}>
      <Nav />
      <div className="hero-body">
        <div className="section">
          <h1 className="title is-1 box" style={{textAlign: "center"}}>About Me</h1>
          <p className="box has-text-black">
            I'm a 26 year old, born and raised, Vermonter currently attending a
            full time Web Development boot camp to shift my career from LTL to
            something more rewarding with code! One thing interesting to me
            about coding is the endless possibilities you can find as long as
            you keep looking. There are always going to be more opportunities to
            grow and learn new things as a developer as long as you do not allow
            yourself to stagnate, unless of course that is what you want to do.
            As a child I had always fantasized about getting into the gaming
            industry but eventually landed on software development in general. I
            have a couple friends and my youngest brother who are into Web
            Development and figured I would try my hand at it! Want to
            learn more about me outside of code?{" "}
            <Link to="/hobbies">Click here</Link> or the "Hobbies" link above in the
            nav.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
