import styled from "styled-components";

const Social = () => {
  return (
    <SocialBox id="social">
      <SocialTitle>
        <span>
          SOCIALS
        </span>
      </SocialTitle>
      <div>
        <div>
          <SocialLink href="https://www.linkedin.com/in/johan-bejar/" target="_blank" rel="noopener noreferrer">
            <span>
              LINKEDIN
            </span>
          </SocialLink>
        </div>
        <div>
          <SocialLink href="https://github.com/Speekz" target="_blank" rel="noopener noreferrer">
            <span>
              GITHUB
            </span>
          </SocialLink>
        </div>
      </div>
    </SocialBox>
  )
};

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialTitle = styled.h2`
  margin: 0;
  padding: 0;
  span {
    font-family: Morton-Light;
    font-size: 0.7em;
    opacity: 0.5;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 3.5em;
  font-family: Morton-Black;
`;

export default Social;