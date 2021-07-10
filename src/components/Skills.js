import { SKILLS_LIST } from "../lib"

const Skills = () => {
  return (
    <div id="skills" className="section-skills">
      <h2>Skills</h2>
      <div> 
        {SKILLS_LIST.map(skill => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
      <div className="resume">
        <a href="/resume/johan_bejar_resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
      </div>
    </div>
  )
}

export default Skills;