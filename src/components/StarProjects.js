import styled from "styled-components";

import { DEVICE_MAX, DEVICE_MIN, PROJECTS, MORE_PROJECTS } from "../lib";

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
            <ProjectDetailBox>
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
              {project.links.map((links, index) => (
                <ProjectLinks key={index} href={links.link} target="_blank" rel="noopener noreferrer">{`> ${links.title}`}</ProjectLinks>
              ))}
            </ProjectDetailBox>
          </ProjectBox>
        ))}
      </div>
      <MoreProjectsBox>
        <span>
          {MORE_PROJECTS.first}
        </span>
        <MoreProjectsText href={`/${MORE_PROJECTS.reference}`}>
          <span>
            {MORE_PROJECTS.highlight}
          </span>
        </MoreProjectsText>
      </MoreProjectsBox>
    </SectionBox>
  )
};

const ProjectDetailBox = styled.div`
  width: 100%;

  @media ${DEVICE_MIN.tablet} {
    width: 60%;
  };
`;

const SectionBox = styled.div`
  margin-bottom: 2em;

  @media ${DEVICE_MIN.laptop} {
    display: flex;
    flex-direction: row;
  };
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

    @media ${DEVICE_MIN.laptop} {
      transform-origin: center;
      transform: translate3d(-50.5%,-50%,0), rotate(-90deg);
    };
  };
`;

const ProjectTitle = styled.h3`
  font-size: 2.5em;
  margin: 0.3em 0 0 0;
  font-family: Morton-bold;
  
  @media ${DEVICE_MIN.mobileL} {
    font-size: 3.5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 4.5em;
  };
`;

const ProjectBox = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE_MIN.laptop} {
    flex-direction: row;
  };
`;

const ImageBox = styled.div`
  display: flex;
`;

const MoreProjectsBox = styled.div`
  margin-left: 0;
  margin-top: 6.25vh;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  span {
    font-size: 2em;
    padding-left: 0;
    line-height: 0.9;
  };
`;

const MoreProjectsText = styled.a`
  position: relative;
  text-decoration: none;
  color: #34AA8D;
  font-family: Morton-Black;
  font-size: 3em;
  padding-left: 0;

  @media ${DEVICE_MIN.mobileL} {
    font-size: 3.5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 6em;
  };
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
  object-fit: contain;
`;

const ProjectDetailsList = styled.ul`
  list-style-type: none;
`;

const ProjectDetails = styled.li`
  span { 
    position: relative;
    left: -10px;
  };
  
  @media ${DEVICE_MAX} {
    display: none;
  };
`;

const ProjectMinDetails = styled.li`
  text-transform: uppercase;
  span { 
    position: relative;
    left: -30px;
    font-family: Morton-Light;
    letter-spacing: 0.1em;
    font-size: 0.8em;
  };
`;

const ProjectLinks = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  display: block;
`;

export default StarProjects;