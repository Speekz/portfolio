import styled from 'styled-components'

import { SECTION_TITLES, GENERAL_INFO, DEVICE_MIN } from '../lib'

const Contact = () => {
  return (
    <SectionBox id="contact">
      <ContactTitle>
        <span>{SECTION_TITLES.CONTACT}</span>
      </ContactTitle>
      <Line />
      <EmailBox>
        <EmailInvitation>{GENERAL_INFO.email.text}</EmailInvitation>
        <EmailText href={`mailto:${GENERAL_INFO.email.ref}`}>
          <span>{GENERAL_INFO.email.ref}</span>
        </EmailText>
      </EmailBox>
    </SectionBox>
  )
}

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 0;

  @media ${DEVICE_MIN.laptop} {
    margin: 0;
    margin-left: 30px;
    height: 100vh;
    width: 600px;
  } ;
`

const ContactTitle = styled.h2`
  margin: 0;
  padding: 0;
  padding-bottom: 0.2em;
  text-transform: uppercase;

  span {
    font-family: Morton-Light;
    font-size: 0.7em;
    opacity: 0.5;
  }

  @media ${DEVICE_MIN.laptop} {
    position: absolute;
    top: 50%;
    white-space: nowrap;
  } ;
`

const Line = styled.hr`
  transform-origin 0% 0%;
  transform: translate(0px, 0px);
  margin: 0;
  margin-bottom: 1em;
  margin-right: 1em;

  @media ${DEVICE_MIN.laptop} {
    display: none;
  };
`

const EmailBox = styled.div`
  @media ${DEVICE_MIN.laptop} {
    display: inline-flex;
    flex-direction: column;
    border-left: 1px solid #aaa;
    margin-left: 80px;
    height: 100vh;
    align-items: center;
    width: 400px;
  } ;
`

const EmailInvitation = styled.span`
  display: none;

  @media ${DEVICE_MIN.laptop} {
    text-transform: uppercase;
    font-family: Morton-Thin;
    font-size: 2.5em;
    display: block;
    white-space: nowrap;
    position: absolute;
    top: 47%;
  } ;
`

const EmailText = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-family: Morton-Medium;
  font-size: 1.25em;
  transition: all 0.1s ease-in;

  &:hover {
    color: #34aa8d;
  }

  @media ${DEVICE_MIN.tablet} {
    font-size: 2em;
  }

  @media ${DEVICE_MIN.laptop} {
    position: absolute;
    top: 52%;
    margin-left: 10px;
  } ;
`

export default Contact
