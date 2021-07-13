import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
/* Hobbies
  --Do you play any instruments or play in a band?
  --Are you on an intramural sports team like soccer, ultimate frisbee or softball?
  --Are you passionate about an outdoor sport such as skiing, rock climbing, mountain biking,   kayaking or something else?
  --Do you volunteer at a local animal shelter, food shelf, or school board? */

const Hobbies = (props) => {

  return (
    <div className="hero" style={{backgroundColor: "#30475E"}}>
      <Nav />
      <div className="hero-body">
        <div className="box has-text-black" style={{backgroundColor: "#DDDDDD"}}>
          <p className="title is-2">Hobbies</p>
          <p className="subtitle">
            There are a handful of activities outside of coding that I enjoy but
            rarely set aside enough time to do participate in most of them. The
            most time consuming of them all has got to be playing videos games
            and always becomes the default option due to convenience sake. When
            I can manage to get myself outside during the summer I enjoy
            mountain biking and hiking and during winter months I love to get up
            on the mountain and snowboard!
          </p>
          <div className="section">
            <p className="title is-4">Video Games</p>
            <p>
              I grew up playing almost every game console there was since my
              introduction to the the Sega Genesis and some of my fondest
              memories are still of games on the N64. However, once I was
              introduced to the joys of PC gaming and subsequently the wonderful
              World of Warcraft, it was all downhill for other games. While I
              kept up playing a few other games over the years so I didn't get
              so burnt out, World of Warcraft has been by game of choice for
              roughly 16 years and continues to be for the time being. Right now
              is a weird time for the game and there are a lot of other great
              looking games that are either out, or going to be out soon, that I
              may ned up trying to find a new one to default to in the near
              future.
            </p>
          </div>
          <div className="section">
            <p className="title is-4">Hiking</p>
            <p>
              Hiking is a wonderful activity to get out and go do not only
              because it's nice to be outside and you get some good exercise in,
              but it's also free(most of the time)! Vermont has some
              exceptionally beautiful scenery when out hiking so it's nice to
              set aside some time while hiking to sit down and take it in for a
              minute instead of focusing on getting the hike done. As nice as
              Vermont's hikes are I would love to be able to get out of the
              state and hike some summit some bigger mountains for an even
              greater challenge than I have faced before.
            </p>
          </div>
          <div className="section">
            <p className="title is-4">Mountain Biking</p>
            <p>
              Mountain biking has a very similar appeal to hiking but without a
              lot of the views. You still get to be surrounded by forests and
              nature, you just don't normally get to appreciate the beauty of it
              as you're flying down the trail coming dangerously close to some
              of the trees. Downhill biking is, in my opinion, the better way to
              do mountain biking except for the treacherous climb to get to the
              top before you can make your decent.
            </p>
          </div>
          <div className="section">
            <p className="title is-4">Snowboarding</p>
            <p>
              Finally we have snowboarding. Let's be honest, being out in the
              cold probably isn't anyone's forte, but when you can be out doing
              something extremely fun and adrenaline pumping it can be worth the
              struggle for a few hours at a time. I've only been snowboarding
              for 4 years now and it's felt amazing to see my own progression
              year over year to where I am comfortable going down almost every
              trail I come across, but no way in hell you'll see me leaving the
              ground on purpose.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hobbies;
