import styled from "styled-components";

import { DEVICE_MAX, PROJECTS } from "../lib";

const StarProjects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
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
    </div>
  )
}

const ProjectTitle = styled.h3`
  font-size: 30px;
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
  color: white;
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
`;

const ProjectLinks = styled.a`
  text-decoration: none;
  color: white;
  display: block;
`;

export default StarProjects;