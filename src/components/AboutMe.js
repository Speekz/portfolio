import styled from "styled-components"
import { DEVICE_MAX, DEVICE_MIN } from "../lib";

const AboutMe = () => {
  return (
    <HeroSection id="about-me">
      <AboutMeBlock>
        <QuestionBlock>
          <AboutMeQuestion>
            Systems and
          </AboutMeQuestion>
          <AboutMeQuestionHighlight>
            Software
          </AboutMeQuestionHighlight>
          <AboutMeQuestion>
            Engineer
          </AboutMeQuestion>
        </QuestionBlock>
        <AnswerBlock>
          <AboutMeAnswer>
            {`I'm a software developer with a tech stack based in the JavaScript programming language. My experience as a system engineer allows me to `}
            <HighlightAnswer>
               understand, design, and develop large-scale web applications.
            </HighlightAnswer>
          </AboutMeAnswer>
        </AnswerBlock>
      </AboutMeBlock>
      <div className="image-about-me">
        <ProfilePic src="/images/johan_bejar.jpg" alt="Johan Bejar profile" />
      </div>
    </HeroSection>
  )
}

const HighlightAnswer = styled.span`
  color: #34AA8D;
`;

const AboutMeAnswer = styled.p`
  line-height: 1.225;
  padding: 0 15%;
  font-size: 0.928em;
`;

const AnswerBlock = styled.div`
  text-transform: uppercase;
  font-family: Morton-light;
  letter-spacing: 0.1em;
`;

const QuestionBlock = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  line-height: 0.9;
`;

const AboutMeQuestion = styled.div`
  font-family: Morton-Medium;
  font-size: 2em;
`;

const AboutMeQuestionHighlight = styled.div`
  font-family: Morton-Bold;
  margin-left: auto;
  font-size: 3.5em;
  color: #34AA8D;
`;

const AboutMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  position: absolute;
  bottom: 3.125vh;
  left: 0;
`;

const ProfilePic = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: cover;
  display: none;

  @media ${DEVICE_MIN.tablet} {
    display: block;
  }
`;

const HeroSection = styled.div`
  height: 50vh;
  position: relative;
  padding 0;

  @media ${DEVICE_MAX.tablet} {
    padding-top: 50vh;
  }
`;

export default AboutMe;
