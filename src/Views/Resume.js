import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import StarProjects from '../components/StarProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Social from '../components/Social';

import { GENERAL_INFO, DEVICE_MAX, DEVICE_MIN } from '../lib';

const Resume = () => {
  return (
    <React.Fragment>
      <NoiseEffect />
      <NavBar />
      <BackgroundImg>
        <MainImage src={`/images/${GENERAL_INFO.backgroundImage.source}`} alt={GENERAL_INFO.backgroundImage.alt}/>
      </BackgroundImg>
      <Content>
        <HeroSection />
        <AboutMe />
        <StarProjects />
        <Skills />
        <Contact />
        <Social />
      </Content>
    </React.Fragment>
  );
};

const NoiseEffect = styled.div`
  animation: grain 6s steps(10) infinite;
  background-image: url('../images/noise.png');
  background-repeat: repeat;
  height: 300%;
  left: -50%;
  opacity: 0.03;
  position: fixed;
  top: -100%;
  width: 300%;
  z-index: 100;
  pointer-events: none;
`;

const BackgroundImg = styled.div`
  transform: translateY(0px);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: auto;

  @media ${DEVICE_MAX.laptop} {
    width: 75vm;
    height: 100vh;
    overflow: hidden;
  };

  @media ${DEVICE_MIN.laptop} {
    margin-left: 68vh;
    margin-top: -10vh;
    z-index: -1;
  };
`;

const MainImage = styled.img`
  transform-origin: 50% 0%;
  opacity:0.2;
  display: block;
  transform: translate(0px, 0px);
  object-fit: cover;
  width: auto;
  height: 100%;
  max-width: 100%;
`;

const Content = styled.div`
  width: 97%;
  height: auto;
  margin-left: 2%;
  font-family: Morton-Regular;

  @media ${DEVICE_MIN.laptop} {
    display: flex;
    flex-direction: row;
    width: auto;
    align-items: stretch;
    flex: 1 1 0;
  };
`;

export default Resume;