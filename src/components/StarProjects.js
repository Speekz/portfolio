import styled from "styled-components";

import { DEVICE_MAX, PROJECTS } from "../lib";

const StarProjects = () => {
  return (
    <SectionBox id="projects">
      <SectionTitle>
        <span>
          Projects
        </span>
      </SectionTitle>
      <Line />
      <div>
        { PROJECTS.map((project) => (
          <ProjectBox key={project.title}>
            <ImageBox>
              <ProjectImage src={`/images/${project.image.source}`} alt={project.image.alt} />
            </ImageBox>
            <div>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </div>
              <ProjectDetailsList>
                {project.minDetails.map((detail, index) => (
                  <ProjectMinDetails key={index}>
                  <span>
                    {detail}
                  </span>
                </ProjectMinDetails>
                ))}
                {project.details.map((detail, index) => (
                  <ProjectDetails key={index}>
                    <span>
                      {detail}
                    </span>
                  </ProjectDetails>
                ))}
              </ProjectDetailsList>
              {project.links.map((links) => (
                <ProjectLinks href={links.link} target="_blank" rel="noopener noreferrer">{`> ${links.title}`}</ProjectLinks>
              ))}
            </div>
          </ProjectBox>
        ))}
      </div>
      <MoreProjectsBox>
        <span>
          WANT TO SEE 
        </span>
        <MoreProjectsText href="/projects">
          <span>
            MORE?
          </span>
        </MoreProjectsText>
      </MoreProjectsBox>
    </SectionBox>
  )
};

const SectionBox = styled.div`
  margin-bottom: 2em;
`;

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

const ProjectTitle = styled.h3`
  font-size: 2.5em;
  margin: 0.3em 0 0.1em;
  font-family: Morton-bold
`;

const ProjectBox = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  display: flex;
`;

const MoreProjectsBox = styled.div`
  margin-left: 0;
  margin-top: 6.25vh;
  display: flex;
  flex-direction: column;

  span {
    font-size: 2em;
    padding-left: 0;
    line-height: 0.9;
  }
`;

const MoreProjectsText = styled.a`
  position: relative;
  text-decoration: none;
  color: #34AA8D;
  font-family: Morton-Black;

  @media ${DEVICE_MAX.tablet} {
    font-size: 3em;
    padding-left: 0;
  }
`;

const ProjectDescription = styled.p`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  color: #34AA8D;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 160px;
`;

const ProjectDetailsList = styled.ul`
  list-style-type: none;
`;

const ProjectDetails = styled.li`
  span { 
    position: relative;
    left: -10px;
  }
  
  @media ${DEVICE_MAX} {
    display: none;
  }
`;

const ProjectMinDetails = styled.li`
  text-transform: uppercase;
  span { 
    position: relative;
    left: -30px;
    font-family: Morton-Light;
    letter-spacing: 0.1em;
    font-size: 0.8em;
  }
`;

const ProjectLinks = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  display: block;
`;

export default StarProjects;