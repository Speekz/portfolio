import styled from 'styled-components';

import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import StarProjects from '../components/StarProjects';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Social from '../components/Social';

import { DEVICE_MIN } from '../lib';

const Resume = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div id="start">
          <HeroSection>
            <div>
              <a href="#about-me">ABOUT ME</a>
              <a href="#projects">PROJECTS</a>
              <a href="#profile">PROFILE</a>
              <a href="#contact">CONTACT</a>
              <a href="#socials">SOCIALS</a>
            </div>
          </HeroSection>
        </div>
        <AboutMe />
        <StarProjects />
        <Profile />
        <Contact />
        <Social />
      </div>
    </div>
  );
}

 
const HeroSection = styled.div`
  display: none;

  @media ${DEVICE_MIN.laptop} {
    display: block;
  }
`;

export default Resume;