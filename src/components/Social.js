import styled from "styled-components";
import { SECTION_TITLES, GENERAL_INFO, DEVICE_MIN } from "../lib";

const Social = () => {
  return (
    <SocialBox id="socials">
      <SocialTitle>
        <span>
          {SECTION_TITLES.SOCIAL}
        </span>
      </SocialTitle>
      <Line />
      <div>
        <div>
          {GENERAL_INFO.socials.map((social, index) => (
            <div>
              <SocialLink key={index} href={social.reference} target="_blank" rel="noopener noreferrer">
                <span>
                  {social.title}
                </span>
              </SocialLink>
            </div>
          ))}
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

  @media ${DEVICE_MIN.laptop} {
    display: none;
  };
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

  @media ${DEVICE_MIN.tablet} {
    font-size: 5.5em;
  };
`;

export default Social;