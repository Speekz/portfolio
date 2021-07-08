import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1><a href="#start">Johan Bejar</a></h1>
        </div>
        <div className="nav-bar"> NAVBAR
          <a href="#about-me">ABOUT ME</a>
          <a href="#projects">PROJECTS</a>
          <a href="#profile">PROFILE</a>
          <a href="#contact">CONTACT</a>
          <a href="#socials">SOCIALS</a>
        </div>
      </header>
      <body>
        <div id="start"> HERO SECTION
          <a href="#about-me">ABOUT ME</a>
          <a href="#projects">PROJECTS</a>
          <a href="#profile">PROFILE</a>
          <a href="#socials">SOCIALS</a>
        </div>
        <div id="about-me" className="section-about-me">
          <text>Who am I?</text>
          <p>I'm a software developer with a tech stack based in the JavaScript programming language. I also have a bachelor's in system engineering and a cybersecurity manager specialist that has worked in Financial services companies for 4 years. My experience as a system engineer allows me to understand, design, and develop large-scale applications that will be consumed by future clients with deep care about security while doing it.</p>
          <img src="/images/johan_bejar.jpg" alt="Johan Bejar profile" width="300" height="300"/>
        </div>
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
                    <text>Telemonitoring mobile application for pediatric obesity checks</text>
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
                  <a href="https://link.springer.com/chapter/10.1007%2F978-981-33-4565-2_6">Springer article about TCO</a>
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
                    <text>Social Media and Events Platform for Runners</text>
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
                  <a href="https://github.com/Speekz/RUNashville">Github FrontEnd</a>
                  <a href="https://github.com/Speekz/RUNashville-backend">Github Backend</a>
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
        <div id="profile" className="section-profile">
          <div> 
            {/* Crear componente aqui */}
            <text>JAVASCRIPT</text>
            <text>REACT</text>
            <text>EXPRESS</text>
            <text>LINUX</text>
            <text>HTML</text>
            <text>CSS</text>
            <text>JQUERY</text>
            <text>MONGODB</text>
            <text>MYSQL</text>
            <text>JAVA</text>
            <text>VISUAL BASIC</text>
            <text>PHP</text>
            <text>C#</text>
            <text>SQL-SERVER</text>
            <text>VIM</text>
            <text>FIREBASE</text>
            <text>AWS</text>
          </div>
        </div>
        <div className="resume">
          <a href="/resume/johan_bejar_resume.pdf">RESUME</a>
        </div>
        <div id="contact" className="section-contact">
          <div className="contact-title">
            <text>CONTACT ME</text>
          </div>
          <div className="contact-body">
            <div className="contact-inquiry-title">
              TITLE: 
              <input></input>
            </div>
            <div className="contact-inquiry-message">
              MESSAGE: 
              <input></input>
            </div>
          </div>
        </div>
        <div id="social" className="section-socials">
          <div className="social-box">
            <a href="https://www.linkedin.com/in/johan-bejar/">LINKEDIN</a>
            <a href="https://github.com/Speekz">GITHUB</a>
            <a href="https://www.facebook.com/johanbejarc">FACEBOOK</a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
