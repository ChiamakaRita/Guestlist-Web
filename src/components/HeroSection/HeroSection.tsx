import React,{useState} from 'react'
import {
  HeroContainer, 
  HeroBg, 
  ImageBg,
HeroContent,
HeroH1,
HeroP,
ArrowForward,
ArrowRight,
HeroBtnWrapper,Button } from './HeroElement';
import Image from "../../images/heroSectionBg.jpg"





const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    
      <HeroContainer className='herosection'>
        <HeroBg>
          <ImageBg src={Image} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Life is Beautiful</HeroH1>
          <HeroP>
            Join Us Today to get unlimited Access to Our Outlet Features
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="contact"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    
  );
}

export default HeroSection


