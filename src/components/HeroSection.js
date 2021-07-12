import styled from "styled-components";
import { DEVICE_MIN } from "../lib";

const HeroSection = () => {
  return (
    <HeroBox>
      <MenuLink href="#about-me">
        <span>
          ABOUT ME
        </span>
      </MenuLink>
      <MenuLink href="#projects">
        <span>
          PROJECTS
        </span>
      </MenuLink>
      <MenuLink href="#skills">
        <span>
          SKILLS
        </span>
      </MenuLink>
      <MenuLink href="#contact">
        <span>
          CONTACT
        </span>
      </MenuLink>
      <MenuLink href="#socials">
        <span>
          SOCIALS
        </span>
      </MenuLink>
    </HeroBox>
  );
};

const HeroBox = styled.div`
  display: none;

  @media ${DEVICE_MIN.laptop} {
    display: flex;
    flex-direction: column;
    padding: 10vh 0;
    margin-right: 45vh;
  };
`;

const MenuLink = styled.a`
  font-family: Morton-ExtraBold;
  font-size: 10.5em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in;
  color: #FFFFFF;
  align-self: flex-start;
  text-transform: uppercase;
  line-height: 1em;

  span {
    white-space: pre;
  };

  &:hover {
    color: #34AA8D;
  };
`;

export default HeroSection;
