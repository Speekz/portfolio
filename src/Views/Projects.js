import React from "react";
import styled from "styled-components";

// import { PROJECTS } from "../lib";

const Projects = () => {
  return (
    <div>
      <ProjectText> 
        More detailed projects soon. Check my
        <GithubLink href={"https://github.com/Speekz"} target="_blank" rel="noopener noreferrer">
          <span>
            {` Github `}
          </span>
        </GithubLink>
          for more .
      </ProjectText>
      {/* {PROJECTS.map((project, index) => (
        <div key={index}> 
          {project.title}
        </div>
      ))} */}
    </div>
  )
};

const ProjectText = styled.span` 
font-size: 4em;
`;

const GithubLink = styled.a`
  text-decoration: none;
  color: #34AA8D;

  &:hover {
    color: #FFFFFF;
  };
`;

export default Projects;
