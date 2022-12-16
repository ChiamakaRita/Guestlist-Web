import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import Image from "../../images/guestlist-mobile-app-4.png"

const About = () => {
  return (  
	 <div className="about">
      <div className="container">
        <img className='img'
	    	src={Image} alt="The Guestlist Outlet" />
        <div className="column-2">
          <h2>About</h2>
          <p className="line-style">
            The Guestlist Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aspernatur, non corrupti. Repudiandae corrupti dolore beatae
            eveniet architecto. Quibusdam aut inventore, libero neque beatae
            suscipit itaque facere est voluptas doloribus voluptatibus soluta
            distinctio. Ut ad delectus debitis amet dolore beatae assumenda
            iusto doloribus facilis, perferendis, eligendi qui! Voluptates
            necessitatibus ipsum quod!
          </p>
          <p>
            We are Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            blanditiis aut accusantium consequatur beatae atque assumenda, omnis
            quas vel labore?
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About
