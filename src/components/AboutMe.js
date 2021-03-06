import styled from 'styled-components'

import { ABOUT_ME, DEVICE_MAX, DEVICE_MIN } from '../lib'

const AboutMe = () => {
  return (
    <SectionBox id="about-me">
      <AboutMeBlock>
        <QuestionBlock>
          <AboutMeQuestion>{ABOUT_ME.title.first}</AboutMeQuestion>
          <AboutMeQuestionHighlight>
            {ABOUT_ME.title.highlight}
          </AboutMeQuestionHighlight>
          <AboutMeQuestion>{ABOUT_ME.title.second}</AboutMeQuestion>
        </QuestionBlock>
        <AnswerBlock>
          <AboutMeAnswer>
            {ABOUT_ME.description.regular}
            <HighlightAnswer>{ABOUT_ME.description.highlight}</HighlightAnswer>
          </AboutMeAnswer>
        </AnswerBlock>
      </AboutMeBlock>
    </SectionBox>
  )
}

const SectionBox = styled.div`
  height: 50vh;
  position: relative;
  padding 0;

  @media ${DEVICE_MAX.laptop} {
    padding-top: 50vh;
  };

  @media ${DEVICE_MIN.laptop} {
    height: 100vh;
    width: 1000px;
    display: flex;
  };
`

const AboutMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  position: absolute;
  bottom: 3.125vh;
  left: 0;

  @media ${DEVICE_MIN.laptop} {
    position: relative;
    bottom: 0;
    top: 57%;
    padding: 0;
  }

  @media ${DEVICE_MIN.desktop} {
    top: 48%;
  } ;
`

const QuestionBlock = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  line-height: 0.9;
`

const AboutMeQuestion = styled.div`
  font-family: Morton-Medium;
  font-size: 2em;

  @media ${DEVICE_MIN.mobileM} {
    font-size: 2.5em;
  }

  @media ${DEVICE_MIN.tablet} {
    font-size: 4em;
  } ;
`

const AboutMeQuestionHighlight = styled.div`
  font-family: Morton-Bold;
  margin-left: auto;
  font-size: 3.5em;
  color: #34aa8d;

  @media ${DEVICE_MIN.mobileM} {
    font-size: 4em;
  }

  @media ${DEVICE_MIN.mobileL} {
    font-size: 5em;
  }

  @media ${DEVICE_MIN.tablet} {
    font-size: 8.5em;
  } ;
`

const AnswerBlock = styled.div`
  text-transform: uppercase;
  font-family: Morton-light;
  letter-spacing: 0.1em;
`

const AboutMeAnswer = styled.p`
  line-height: 1.225;
  padding: 0 15%;
  font-size: 0.928em;
`

const HighlightAnswer = styled.span`
  color: #34aa8d;
`

export default AboutMe
