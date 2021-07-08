import { SKILLS_LIST } from "../lib"

const Profile = () => {
  return (
    <div id="profile" className="section-profile">
      <div> 
        {SKILLS_LIST.map(skill => (
          <text>{skill}</text>
        ))}
      </div>
      <div className="resume">
        <a href="/resume/johan_bejar_resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
      </div>
    </div>
  )
}

export default Profile;