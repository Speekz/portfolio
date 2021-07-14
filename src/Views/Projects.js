import React from "react";

import { PROJECTS } from "../lib";

const Projects = () => {
  return (
    <div>
      HI, here I will post more projects.
      {PROJECTS.map((project, index) => (
        <div key={index}> 
          {project.title}
        </div>
      ))}
    </div>
  )
};

export default Projects;
