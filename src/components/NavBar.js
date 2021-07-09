import React, { useState } from "react";
import styled from "styled-components";

import { DEVICE_MIN, DEVICE_MAX } from "../lib";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <HeaderBar>
      <HeaderTitle>
        <a href="#start">Johan Bejar</a>
      </HeaderTitle>
      <Hamburger onClick={() => { setMenuIsOpen(!menuIsOpen) }}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu menuIsOpen={menuIsOpen}>
          <MenuLink href="#about-me">ABOUT ME</MenuLink>
          <MenuLink href="#projects">PROJECTS</MenuLink>
          <MenuLink href="#profile">PROFILE</MenuLink>
          <MenuLink href="#contact">CONTACT</MenuLink>
          <MenuLink href="#socials">SOCIALS</MenuLink>
      </Menu>
    </HeaderBar>
  )
};

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media ${DEVICE_MIN.tablet} {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media ${DEVICE_MAX.tablet} {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ menuIsOpen }) => ( menuIsOpen ? "300px" : "0")};
    transition: max-height 0.2s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    color: #FFFFFF;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1em;
  padding: 1rem 0;

  @media ${DEVICE_MIN.laptop} {
    font-size: 1.2em;
  }
`;

const HeaderBar = styled.header`
  background-color: yellow;
  display: flex;
  font-size: 1em;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${DEVICE_MIN.laptop} {
    font-size: 1.2em;
  }
`;


export default NavBar;
