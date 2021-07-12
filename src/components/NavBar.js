import React, { useState } from "react";
import styled from "styled-components";

import { DEVICE_MIN, DEVICE_MAX } from "../lib";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const MenuInteraction = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <HeaderBar menuIsOpen={menuIsOpen}>
      <HeaderTitle>
        <Logo href="/">
          <span>
            Johan Bejar
          </span>
        </Logo>
      </HeaderTitle>
      <Hamburger onClick={MenuInteraction}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu menuIsOpen={menuIsOpen}>
          <MenuLink href="#about-me" onClick={MenuInteraction}>
            <span>
              About me
            </span>
          </MenuLink>
          <MenuLink href="#projects" onClick={MenuInteraction}>
            <span>
              Projects
            </span>
          </MenuLink>
          <MenuLink href="#skills" onClick={MenuInteraction}>
            <span>
              Skills
            </span>
          </MenuLink>
          <MenuLink href="#contact" onClick={MenuInteraction}>
            <span>
              Contact
            </span>
          </MenuLink>
          <MenuLink href="#socials" onClick={MenuInteraction}>
            <span>
              Socials
            </span>
          </MenuLink>
      </Menu>
      <Copyright menuIsOpen={menuIsOpen}>
        <span>Copyright © 2021 Johan Bejar. All rights Reserved</span>
      </Copyright>
    </HeaderBar>
  )
};

const Copyright = styled.div`
  font-family: Morton-Book;
  text-transform: uppercase;
  display: ${({menuIsOpen}) => (menuIsOpen ? "block" : "none")};

  @media ${DEVICE_MIN.tablet} {
    display: none;
  };
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 3vh 0 0 0;
  align-self: flex-start;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  };

  @media ${DEVICE_MIN.tablet} {
    display: none;
  };
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  align-self: flex-start;
  
  @media ${DEVICE_MAX.tablet} {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ menuIsOpen }) => ( menuIsOpen ? "100%" : "0")};
    transition: max-height 0.1s ease-in;
  };
`;

const MenuLink = styled.a`
  font-family: Morton-ExtraBold;
  font-size: 3em;
  padding: 1rem 0.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in;
  color: #FFFFFF;
  align-self: flex-start;
  text-transform: uppercase;
`;

const Logo = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
`;

const HeaderTitle = styled.h1`
  font-size: 1em;
  padding: 1.5vh 0 0 0;
  align-self: flex-start;

  @media ${DEVICE_MIN.laptop} {
    font-size: 1.2em;
  };
`;

const HeaderBar = styled.header`
  background-color: ${({menuIsOpen}) => (menuIsOpen ? "#34AA8D" : "transparent")};
  display: flex;
  font-size: 1em;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 10;
  position: fixed;
  mix-blend-mode: ${({menuIsOpen}) => (menuIsOpen ? "none" : "difference")};
  width: 80%;
  height: ${({menuIsOpen}) => (menuIsOpen ? "100vh" : "5vh")};
  transition: background-color 0.2s ease-in, height 0.3s ease-out;

  @media ${DEVICE_MIN.laptop} {
    font-size: 1.2em;
  };
`;


export default NavBar;
