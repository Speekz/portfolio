import styled from "styled-components";

const Contact = () => {
  return (
    <ContactBox id="contact">
      <ContactText>
        <span>
          CONTACT ME
        </span>
      </ContactText>
      <EmailText href="mailto:johanbejarc@gmail.com">
        <span>
          johanbejarc@gmail.com
        </span>
      </EmailText>
    </ContactBox>
  )
};

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.h2`
  margin: 0;
  padding: 0;
  span {
    font-family: Morton-Light;
    font-size: 0.7em;
    opacity: 0.5;
  }
`;

const EmailText = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-family: Morton-Medium;
  font-size: 1.25em;
`;

export default Contact;