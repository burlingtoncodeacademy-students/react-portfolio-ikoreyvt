import React from "react"

const Footer = (props) => {

  return(
    <div className="hero-foot" style={{backgroundColor: "#243c53"}}>
        <div className="columns is-centered">
            <div className="column" style={{marginBottom: "1rem"}}>
              <a href="https://www.facebook.com/kpwitham" className="button">
                Facebook
              </a>
            </div>
            <div className="column" style={{marginBottom: "1rem"}}>
              <a
                href="https://www.instagram.com/witha.k/?hl=en"
                className="button"
              >
                Instagram
              </a>
            </div>
            <div className="column" style={{marginBottom: "1rem"}}>
              <a href="https://github.com/ikoreyvt" className="button">GitHub</a>
            </div>
            <div className="column box" style={{marginBottom: "1rem"}}>
              Copyright Korey Witham
            </div>
        </div>
      </div>
  )
}

export default Footer;