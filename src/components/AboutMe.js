import styled from "styled-components"

const AboutMe = () => {
  return (
    <div id="about-me" className="section-about-me">
      <AboutMeBlock className="text-about-me">
        <AboutMeQuestion>Who am I?</AboutMeQuestion>
        <AboutMeAnswer>I'm a software developer with a tech stack based in the JavaScript programming language. I also have a bachelor's in system engineering and a cybersecurity manager specialist that has worked in Financial services companies for 4 years. My experience as a system engineer allows me to understand, design, and develop large-scale applications that will be consumed by future clients with deep care about security while doing it.</AboutMeAnswer>
      </AboutMeBlock>
      <div className="image-about-me">
        <ProfilePic src="/images/johan_bejar.jpg" alt="Johan Bejar profile" />
      </div>
    </div>
  )
}

const AboutMeQuestion = styled.h2`
`;

const AboutMeAnswer = styled.p`
  text-align: justify;
`;

const AboutMeBlock = styled.div`
  display: flex;
  background: pink;
  flex-direction: column;
  padding: 0 5%;
`;

const ProfilePic = styled.img`
  width: 100%;
  heigth: 100%
  object-fit: cover
`;

export default AboutMe;
