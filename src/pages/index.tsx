import React from 'react'
import About from '../components/aboutSection/About';
import Contact from '../components/contacts/Contact';
import HeroSection from '../components/HeroSection/HeroSection';
import Discover from '../components/howItWorks/Discover';
import { NavbarLink } from '../components/navbarlink/NavbarLink';


const Home = () => {

  return (
    <>
      <NavbarLink />
      <HeroSection />
      <About />
      <Discover />
      <Contact />
    </>
  );
};

export default Home
