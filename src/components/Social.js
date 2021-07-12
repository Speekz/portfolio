import styled from "styled-components";
import { DEVICE_MIN } from "../lib";

const Social = () => {
  return (
    <SocialBox id="socials">
      <SocialTitle>
        <span>
          Socials
        </span>
      </SocialTitle>
      <Line />
      <div>
        <div>
          <SocialLink href="https://www.linkedin.com/in/johan-bejar/" target="_blank" rel="noopener noreferrer">
            <span>
              linkedin
            </span>
          </SocialLink>
        </div>
        <div>
          <SocialLink href="https://github.com/Speekz" target="_blank" rel="noopener noreferrer">
            <span>
              github
            </span>
          </SocialLink>
        </div>
      </div>
    </SocialBox>
  )
};

const Line = styled.hr`
  transform-origin 0% 0%;
  transform: translate(0px, 0px);
  margin: 0;
  margin-bottom: 1em;
  margin-right: 1em;
`;

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialTitle = styled.h2`
  margin: 0;
  padding: 0;
  padding-bottom: 0.2em;
  text-transform: uppercase;
  span {
    font-family: Morton-Light;
    font-size: 0.7em;
    opacity: 0.5;
  };
`;

const SocialLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 3.5em;
  font-family: Morton-Black;

  @media ${DEVICE_MIN.mobileL} {
    font-size: 4.5em;
  };
`;

export default Social;