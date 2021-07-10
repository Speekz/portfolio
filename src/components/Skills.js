import styled from "styled-components";

import { SKILL_RANDOM, DEVICE_MAX } from "../lib"

const Skills = () => {
  return (
    <SkillSectionBox id="skills">
      <h2>Skills</h2>
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