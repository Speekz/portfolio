import styled from "styled-components";

import { 
  SECTION_TITLES, 
  GENERAL_INFO, 
  SKILL_RANDOM, 
  DEVICE_MIN 
} from "../lib"

const Skills = () => {
  return (
    <SectionBox id="skills">
      <SectionTitle>
        <span>
          {SECTION_TITLES.SKILLS}
        </span>
      </SectionTitle>
      <Line />
      <BoxForLaptop>
        <SkillBox> 
          {SKILL_RANDOM.map((skill, index) => (
            <SkillText key={index} index={index} highlight={skill.highlight}>
              {skill.name}
            </SkillText>
          ))}
        </SkillBox>
      </BoxForLaptop>
      <ResumeBox>
        <Resume href={`/resume/${GENERAL_INFO.resume.reference}`}target="_blank" rel="noopener noreferrer">
          <span>
            {GENERAL_INFO.resume.title}
          </span>
        </Resume>
      </ResumeBox>
    </SectionBox>
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

const SectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  padding-bottom: 0.2em;
  text-transform: uppercase;

  span {
    font-family: Morton-Light;
    font-size: 0.7em;
    opacity: 0.5;
  };

  @media ${DEVICE_MIN.laptop} {
    position: absolute;
    top: 50%;
  };
`;

const SectionBox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${DEVICE_MIN.laptop} {
    flex-direction: row;
    // background-color: green;
    margin-left: 30px;
  };
`;

const SkillBox = styled.div`
  padding-bottom: 5%;

  @media ${DEVICE_MIN.laptop} {
    margin-top: 150px;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  };
`;

const SkillText = styled.div`
  font-family: Morton-ExtraBold;
  font-size: 3em;
  line-height: 0.9;
  color: ${({highlight}) => ( highlight ? "#34AA8D" : "white")};
  ${({ index, highlight }) => ( index % 2 ? 
    `-webkit-text-stroke: 1px ${highlight ? "#34AA8D" : "white"};
     color: transparent;` 
    :
    "")}
  
  @media ${DEVICE_MIN.mobileL} {
    font-size: 3.5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 5em;
  };

  @media ${DEVICE_MIN.laptop} {
    font-size: 8em;
  };
`;

const Resume = styled.a`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-family: Morton-Thin;
  font-size: 3.5em;
  padding-left: 0;

  @media ${DEVICE_MIN.mobileM} {
    font-size: 4em;
  };

  @media ${DEVICE_MIN.mobileL} {
    font-size: 4.5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 7em;
  };

  @media ${DEVICE_MIN.laptop} {
    top:45%;
    text-align: center;
  };
`;

const BoxForLaptop = styled.div`
  @media ${DEVICE_MIN.laptop} {
    width: 1500px;
    margin-left: 45px;
    border-left: 1px solid #aaa;
  };
`;

const ResumeBox = styled.div`
  @media ${DEVICE_MIN.laptop} {
    height: 100vh;
    width: 700px;
  };
`;

export default Skills;