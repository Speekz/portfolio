import styled from "styled-components";

import { SKILL_RANDOM, DEVICE_MAX } from "../lib"

const Skills = () => {
  return (
    <SkillSectionBox id="skills">
      <SectionTitle>
        <span>
          Skills
        </span>
      </SectionTitle>
      <Line />
      <SkillBox> 
        {SKILL_RANDOM.map((skill, index) => (
          <SkillText key={index} index={index} highlight={skill.highlight}>
            {skill.name}
          </SkillText>
        ))}
      </SkillBox>
      <div>
        <Resume href="/resume/johan_bejar_resume.pdf" target="_blank" rel="noopener noreferrer">
          <span>
            RESUME HERE
          </span>
        </Resume>
      </div>
    </SkillSectionBox>
  )
};

const Line = styled.hr`
  transform-origin 0% 0%;
  transform: translate(0px, 0px);
  margin: 0;
  margin-bottom: 1em;
  margin-right: 1em;
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
  }
`;

const SkillSectionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillBox = styled.div`
  padding-bottom: 5%;
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
`;

const Resume = styled.a`
  position: relative;
  text-decoration: none;
  color: white;
  font-family: Morton-Thin;

  @media ${DEVICE_MAX.tablet} {
    font-size: 3em;
    padding-left: 0;
  }
`;

export default Skills;