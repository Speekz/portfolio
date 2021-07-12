import styled from "styled-components";
import { DEVICE_MIN } from "../lib";

const Contact = () => {
  return (
    <ContactBox id="contact">
      <ContactTitle>
        <span>
          Contact me
        </span>
      </ContactTitle>
      <Line/>
      <EmailText href="mailto:johanbejarc@gmail.com">
        <span>
          johanbejarc@gmail.com
        </span>
      </EmailText>
    </ContactBox>
  )
};

const Line = styled.hr`
  transform-origin 0% 0%;
  transform: translate(0px, 0px);
  margin: 0;
  margin-bottom: 1em;
  margin-right: 1em;
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 0;
`;

const ContactTitle = styled.h2`
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

const EmailText = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-family: Morton-Medium;
  font-size: 1.25em;

  @media ${DEVICE_MIN.tablet} {
    font-size: 2em;
  };
`;

export default Contact;