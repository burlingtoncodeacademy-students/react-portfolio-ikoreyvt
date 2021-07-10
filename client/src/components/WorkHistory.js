import React from "react";
import Nav from "./Nav";
import "../styles/common.css";

/*
  Create a web version of your resume with basic formatting, don't stress too much about the layout. Make sure to include the following.
  --Your career goal(s).
  --Prior employers going back ten years.
  --Personal skills and experience.
    --e.g. HTML / CSS / JavaScript / Web Development / Git / Command Line
  --Link to a downloadable version of your resume such as a PDF. */

const WorkHistory = (props) => {
  return (
    <div>
      <Nav />
      <div className="bigArea"></div>
      <h1>Work History</h1>
      <div id="htmlResume">
        <h3>Career Goals</h3>
        <ul>
          <li>Not interested in money or fame</li>
          <li>Want to do work that means something to me</li>
          <li>
            Would love to work with Spotify, or Really anything to do with music
          </li>
        </ul>
        <div className="smallArea"></div>
        <h3>Previous Employment</h3>
        <h4>TForce Freight --- Burlington VT --- Sep 2019 - May 2021</h4>
        <p>
          TForce Freight, formerly UPS Freight, is an international
          LTL/Truckload company owned by canadian company TFI International.
        </p>
        <h4>Outbound Supervisor</h4>
        <p>
          As the outbound supervisor for TForce Freight it was my responsibility
          as the only supervisor on duty for most of my shift to be the leader
          of my shift. A lot of my job was boring customer service type
          activities. It was my job to make sure the pickups and deliveries were
          being done in a timely and efficient manner while also making sure my
          drivers were getting home at the end of each safe and in one piece. I
          was also in control of our cross-dock operation at night where I had
          to make sure the freight we were picking up was making it to the right
          door to be correctly loaded on the right trailer to make it to the
          customer.
        </p>
        <ul>
          <li>Lead a team of roughly 15 workers</li>
          <li>Continuously met and/or exceeded expectations for my center</li>
        </ul>
        <h4>FedEx Freight --- Berlin, VT --- Nov 2013 - Jun 2019</h4>
        <p>
          FedEx Freight is the business unit of the FedEx enterprise that
          handles all of their LTL and Truckload services both nationwide and
          internationally.
        </p>
        <h4>Team Lead --- Feb 2018 - Jun 2019</h4>
        <h4>
          Freight Handler, Quality Coach, Driver Apprentice --- Nov 2013 - Feb
          2018
        </h4>
        <h4>(Dock Worker, Dock Mentor)</h4>
        <p>
          Having worked at FedEx for so long I have had the opportunity to work
          several job titles trying to find something that worked for me. I
          started out just as a Freight Handler right out of high school and
          very quickly became one of the best workers on a forklift. After a
          couple years of experience I had taken on the title of Quality Coach
          while on the morning shift where it was my responsibility to
          recuperate any damaged freight that had come in and make sure driver
          stops started being loaded as early as they could. From there I worked
          full time as a Driver Apprentice getting my CDL permit and required
          endorsements while working on the dock. Decided I didn’t want to
          become a driver and tried out the Team Lead last of all. This job was
          essentially supervisor lite where I had some customer service type
          responsibility as well as dispatch board assignments. Overall I was a
          glorified Freight Handler that had to answer the phone during down
          time.
        </p>
        <h4>Other Jobs --- VT --- 2006 - 2013 & 2016 - 2018</h4>
        <p>
          C.P. Dudley Store, East Montpelier, VT --- Deli Worker --- 2016 - 2018
        </p>
        <p>
          Champlain Valley Mobile Care, Richmond, VT --- Carpenter’s Assistant
          --- 2006 - 2013
        </p>
        <h3>Skills</h3>
        <ul>
          <li>Languages: CSS | HTML | JavaScript</li>
          <li>Frameworks: MongoDB | React | Node.js</li>
          <li>Development: Visual Studio | Notepad ++</li>
        </ul>
        <h3>Download my resume here!</h3>
        <a href="./assets/korey_witham_resume.pdf" download >
          <img src="./images/resume_screenshot.png" alt="My Personal Resume" />
        </a>
      </div>
    </div>
  );
};
export default WorkHistory;
