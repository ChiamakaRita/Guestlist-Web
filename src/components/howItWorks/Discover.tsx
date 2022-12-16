import React from 'react'
import "./Discover.css"
import Image from "../../images/guestlist-mobile-app-1a.png"
import {AiOutlineApple} from "react-icons/ai"
import PlayApp from "../../images/play-app.png"
import AppleApp from "../../images/apple-app.png"


const Discover = () => {
  return (
    <div className="discover">
      <h1>How it Works</h1>
      <div className="slide-container">
        <div className="slide-row">
          <div className="slide-col">
            <div className="slide-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                est nesciunt quam animi dolor voluptate ullam perspiciatis
                suscipit
              </p>
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet,orem ipsum dolor sit amet.</p>
              
            </div>
            <div className="slide-image">
              <img src={Image} />
            </div>
            <div className="app">
              <img src={PlayApp} className="app play-app" />
              <img src={AppleApp} className="app apple-app" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover
