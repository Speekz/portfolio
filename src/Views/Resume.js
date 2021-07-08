import styled from 'styled-components';
import { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import StarProjects from '../components/StarProjects';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Social from '../components/Social';

import { DEVICE } from '../lib';

let displayNavBar = false;

const HeaderBar = styled.header`
  background-color: yellow;
  display: flex;
  font-size: 1em;
  align-items: center;

  @media ${DEVICE.laptop} {
    font-size: 1.2em;
    ${displayNavBar = true}
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1em;

  @media ${DEVICE.laptop} {
    font-size: 1.2em;
  }
`;

const Resume = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {

  },);


  return (
    <div>
      <HeaderBar>
        <div>
          <HeaderTitle><a href="#start">Johan Bejar</a></HeaderTitle>
        </div>
        <div className="nav-bar"> NAVBAR
          <NavBar />
        </div>
      </HeaderBar>
      <div>
        <div id="start"> HERO SECTION
          <NavBar />
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

export default Resume;