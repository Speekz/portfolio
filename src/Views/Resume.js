import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import StarProjects from '../components/StarProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Social from '../components/Social';

import { DEVICE_MAX, DEVICE_MIN } from '../lib';

const Resume = () => {
  return (
    <React.Fragment>
      <NoiseEffect />
      <NavBar />
      <BackgroundImg>
        <MainImage src="/images/banner_background.jpg" alt="ESGPLAY Background"/>
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
  };

  @media ${DEVICE_MIN.laptop} {
    display: none;
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
    // overflow-y: auto;
    // overflow-x: hidden;
    // transform: translate3d(-1px, 0px, 0px);
  };
`;

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

export default Resume;