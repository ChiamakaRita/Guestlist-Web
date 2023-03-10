import styled from "styled-components"
import {MdKeyboardArrowRight,MdArrowForward} from "react-icons/md"
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    buttom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
      z-index: 2;
  }
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const ImageBg = styled.img`
width: 100%;
height: 100%
background-position: center;
opacity: 0.2;
background-size: cover;
background-repeat: no-repeat;

`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 200px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px:
text-align: center;

@media screen and(max-width: 768px ){
    font-size: 40px;
}

@media screen and(max-width: 480px ){
    font-size: 32px;
}
`
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 1.6;
  max-width: 600px;

  @media screen and(max-width: 768px ) {
    font-size: 24px;
  }

  @media screen and(max-width: 480px ) {
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Button = styled(Link)`
  border-radius: 50px;
  background: purple;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: purple;
  }
`;
