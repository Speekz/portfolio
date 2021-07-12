import styled from "styled-components"
import { ABOUT_ME, DEVICE_MAX, DEVICE_MIN } from "../lib";

const AboutMe = () => {
  return (
    <HeroSection id="about-me">
      <AboutMeBlock>
        <QuestionBlock>
          <AboutMeQuestion>
            {ABOUT_ME.title.first}
          </AboutMeQuestion>
          <AboutMeQuestionHighlight>
            {ABOUT_ME.title.highlight}
          </AboutMeQuestionHighlight>
          <AboutMeQuestion>
            {ABOUT_ME.title.second}
          </AboutMeQuestion>
        </QuestionBlock>
        <AnswerBlock>
          <AboutMeAnswer>
            {ABOUT_ME.description.regular}
            <HighlightAnswer>
              {ABOUT_ME.description.highlight}   
            </HighlightAnswer>
          </AboutMeAnswer>
        </AnswerBlock>
      </AboutMeBlock>
      <div className="image-about-me">
        <ProfilePic src={`/images/${ABOUT_ME.profilePic.source}`} alt={ABOUT_ME.profilePic.alt} />
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

  @media ${DEVICE_MIN.mobileM} {
    font-size: 2.5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 4em;
  };
`;

const AboutMeQuestionHighlight = styled.div`
  font-family: Morton-Bold;
  margin-left: auto;
  font-size: 3.5em;
  color: #34AA8D;

  @media ${DEVICE_MIN.mobileM} {
    font-size: 4em;
  };

  @media ${DEVICE_MIN.mobileL} {
    font-size: 5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 8.5em;
  };
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
  width: 30%;
  heigth: 100%;
  object-fit: cover;
  display: none;

  @media ${DEVICE_MIN.laptop} {
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
