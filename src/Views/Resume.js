import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import StarProjects from '../components/StarProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Social from '../components/Social';

import { DEVICE_MIN, DEVICE_MAX } from '../lib';

const Resume = () => {
  return (
    <React.Fragment>
      <NoiseEffect />
      <NavBar />
      <BackgroundImg>
        <MainImage src="/images/banner_background.jpg" alt="ESGPLAY Background"/>
      </BackgroundImg>
      <Content>
        <HeroSection>
          <div>
            <a href="#about-me">ABOUT ME</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
            <a href="#socials">SOCIALS</a>
          </div>
        </HeroSection>
        <AboutMe />
        <StarProjects />
        <Skills />
        <Contact />
        <Social />
      </Content>
    </React.Fragment>
  );
}

const BackgroundImg = styled.div`
  transform: translateY(0px);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: auto;

  @media ${DEVICE_MAX.tablet} {
    width: 75vm;
    height: 100vh;
    overflow: hidden;
  }
`;

const MainImage = styled.img`
  transform-origin: 50% 0%;
  opacity:0.2;
  transform: translate(0px, 0px);
  object-fit: cover;
  width: auto;
  height: 100%;
`;
 
const HeroSection = styled.div`
  display: none;

  @media ${DEVICE_MIN.laptop} {
    display: block;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  font-family: Morton-Regular;
`;

const NoiseEffect = styled.div`
  animation: grain 6s steps(10) infinite;
  background-image: url('../images/noise.png');
  background-repeat: repeat;
  height: 300%;
  left: -50%;
  opacity: 0.05;
  position: fixed;
  top: -100%;
  width: 300%;
  z-index: 100;
  pointer-events: none;
`;

export default Resume;