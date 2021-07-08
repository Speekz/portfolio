import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import StarProjects from '../components/StarProjects';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Social from '../components/Social';

const Resume = () => {
  return (
    <div>
      <header>
        <div>
          <h1><a href="#start">Johan Bejar</a></h1>
        </div>
        <div className="nav-bar"> NAVBAR
          <NavBar />
        </div>
      </header>
      <body>
        <div id="start"> HERO SECTION
          <NavBar />
        </div>
        <AboutMe />
        <StarProjects />
        <Profile />
        <Contact />
        <Social />
      </body>
    </div>
  );
}

export default Resume;