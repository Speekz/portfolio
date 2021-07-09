import { PROJECTS } from "../lib";

const StarProjects = () => {
  return (
    <div id="projects" className="section-projects">
      <h2>Projects</h2>
      <div className="star-projects">
        { PROJECTS.map((project) => (
          <div key={project.title}>
            <div className="project-image">
              <img src={`/images/${project.image.source}`} alt={project.image.alt} width="100%" height="100%"></img>
            </div>
            <div className="project-content">
              <div className="project-details">
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul>
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <a href={project.links.link} target="_blank" rel="noopener noreferrer">{project.links.title}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="more-projects">
        <div className="invitation">
          <a href="/projects">WANT TO SE MORE?</a>
        </div>
      </div>
    </div>
  )
}

export default StarProjects;