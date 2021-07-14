import styled from "styled-components";

import { MENU, DEVICE_MIN } from "../lib";

const HeroSection = () => {
  return (
    <SectionBox>
      {MENU.map((item, index) => (
        <MenuLink key={index} href={item.reference}>
          <span>
            {item.title}
          </span>
        </MenuLink>
      ))}
    </SectionBox>
  );
};

const SectionBox = styled.div`
  display: none;

  @media ${DEVICE_MIN.laptop} {
    display: flex;
    flex-direction: column;
    padding: 10vh 0;
    margin-right: 230px;
    //background-color: blue;
  };
`;

const MenuLink = styled.a`
  font-family: Morton-ExtraBold;
  font-size: 8.5em;
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
    color: transparent;
    -webkit-text-stroke: 1px #34AA8D;
  };

  // @media ${DEVICE_MIN.laptopL} {
  //   font-size: 10em;
  // };
`;

export default HeroSection;
