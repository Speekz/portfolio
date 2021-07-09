const StarProjects = () => {
  return (
    <div id="projects" className="section-projects">
      <div className="star-projects">
        <div className="project-1">
          <div className="project-image">
            <img src="/images/TCO_APP.jgp" alt="No Gorditos / TCO APK" width="300" height="300"></img>
          </div>
          <div className="project-content">
            <div className="project-details">
              <div className="project-title">
                <h2>TCO APP</h2>
                <p>Telemonitoring mobile application for pediatric obesity checks</p>
              </div>
              <ul>
                <li>
                  Supported both remote monitoring automatically through rules and manually via a specialist to registered
                  patients with an Android Application, reducing child onboarding time to the program by 83% from 2 hours to
                  10 minutes.
                </li>
                <li>
                  Delivered health reports about patients considering factors like prescriptions and caregiver participation on a
                  predetermined obesity plan in real time with Firebase, reducing dropouts in 38%.
                </li>
              </ul>
              <a href="https://link.springer.com/chapter/10.1007%2F978-981-33-4565-2_6" target="_blank" rel="noopener noreferrer">Springer article about TCO</a>
            </div>
          </div>
        </div>
        <div className="project-2">
          <div className="project-image">
            <img src="/images/RUNashville.jgp" alt="RUNashville" width="300" height="300"></img>
          </div>
          <div className="project-content">
            <div className="project-details">
              <div className="project-title">
                <h2>RUNashville</h2>
                <p>Social Media and Events Platform for Runners</p>
              </div>
              <ul>
                <li>
                  Modeled highly-scalable API services on NodeJS connecting the RUNashville website to events platforms,
                  reducing time to launch an event to 15 minutes from 45 minutes average.
                </li>
                <li>
                  Developed signup and login pages on React with cryptographic, securing password handling through the
                  network.
                </li> 
              </ul>
              <a href="https://github.com/Speekz/RUNashville" target="_blank" rel="noopener noreferrer">Github FrontEnd</a>
              <a href="https://github.com/Speekz/RUNashville-backend" target="_blank" rel="noopener noreferrer">Github Backend</a>
            </div>
          </div>
        </div>
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