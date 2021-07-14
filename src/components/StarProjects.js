import styled from "styled-components";

import { 
  SECTION_TITLES, 
  DEVICE_MIN,
  STAR_PROJECTS, 
  MORE_PROJECTS 
} from "../lib";

const StarProjects = () => {
  return (
    <SectionBox id="projects">
      <SectionTitle>
        <span>
          {SECTION_TITLES.STAR_PROJECTS}
        </span>
      </SectionTitle>
      <Line />
      <CollectionProjectBox>
        <MarginBox>
          { STAR_PROJECTS.map((project, index) => (
            <ProjectBox key={index} index={index}>
              <ImageBox>
                <ProjectImage src={`/images/${project.image.source}`} alt={project.image.alt} index={index}/>
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
                </ProjectDetailsList>
                {project.links.map((links, index) => (
                  <ProjectLinks key={index} href={links.link} target="_blank" rel="noopener noreferrer">{`> ${links.title}`}</ProjectLinks>
                ))}
              </ProjectDetailBox>
            </ProjectBox>
          ))}
        </MarginBox>
      </CollectionProjectBox>
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

const SectionBox = styled.div`
  margin-bottom: 2em;

  @media ${DEVICE_MIN.laptop} {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
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

const CollectionProjectBox = styled.div`
  @media ${DEVICE_MIN.laptop} {
    width: 1000px;
    margin-left: 60px;
    border-left: 1px solid #aaa;
    display: flex;
    flex-direction: column;
  };

  @media ${DEVICE_MIN.laptopL} {
    width: 1100px;
  };
`;

const MarginBox = styled.div`
  @media ${DEVICE_MIN.laptop} {
    margin-top: 8vh;
  };
`;

const ProjectBox = styled.div`
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE_MIN.laptop} {
    padding: 0;
    flex-direction: row;
    ${({index})=> (index === 1 ? 
      `margin-left: 250px;`:
      "")}
    ${({index})=> (index === 2 ? 
      `margin-left: 400px;`:
      "")}
  };
`;

const ImageBox = styled.div`
  display: flex;

  @media ${DEVICE_MIN.laptop} {
    justify-content: space-evenly;
    margin: 0 !important;
    padding: 0;
  };
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media ${DEVICE_MIN.laptop} {
    width: 70%;
    height: 70%;
    ${({index}) => ( index === 2? 
      `margin: 0 100px;
      width: 30%`: "")}
  };

  @media ${DEVICE_MIN.laptopL} {
    width: 80%;
    height: 80%;
  };
`;

const ProjectDetailBox = styled.div`
  width: 100%;

  @media ${DEVICE_MIN.tablet} {
    width: 60%;
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

  @media ${DEVICE_MIN.laptop} {
    white-space: nowrap;
    font-size: 2.5em;
  };

  @media ${DEVICE_MIN.laptopL} {
    font-size: 3em;
  };
`;

const ProjectDescription = styled.p`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  color: #34AA8D;

  @media ${DEVICE_MIN.laptopL} {
    font-size: 1.15em;
  };
`;

const ProjectDetailsList = styled.ul`
  list-style-type: none;

  @media ${DEVICE_MIN.laptopL} {
    font-size: 1.15em;
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

  @media ${DEVICE_MIN.laptopL} {
    font-size: 1.15em;
  };
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

  @media ${DEVICE_MIN.laptop} {
    margin-top: 15%;
  };

  @media ${DEVICE_MIN.laptopL} {
    margin-top: 24%;
  };
`;

const MoreProjectsText = styled.a`
  position: relative;
  text-decoration: none;
  color: #34AA8D;
  font-family: Morton-Black;
  font-size: 3em;
  padding-left: 0;
  transition: all 0.1s ease-in;

  &:hover {
    color: transparent;
    -webkit-text-stroke: 1px #FFFFFF;
  };

  @media ${DEVICE_MIN.mobileL} {
    font-size: 3.5em;
  };

  @media ${DEVICE_MIN.tablet} {
    font-size: 6em;
  };
`;

export default StarProjects;