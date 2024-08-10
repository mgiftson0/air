import styled from 'styled-components';
import CardContainer from '../cards/CardContainer'; // Adjust path as necessary

const About = () => {
  return (
    <AboutSection>
      <LineBreak />
      <Header>
        Browse Autonomous AI Agents
        <Subtitle>
          Browse the marketplace for individual agents or pre-built agent teams curated by our community.
        </Subtitle>
      </Header>
      <CardContainerWrapper>
        <CardContainer />
      </CardContainerWrapper>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  position: relative;
  color: white;
  width: 100%;
  overflow-x: hidden;
  margin-top: -10px;
  padding: 4rem 2rem 2rem;
  min-height: 100vh;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 3rem 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem 0.75rem;
  }
`;

const Header = styled.h1`
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    white-space: pre-line;
    margin-left: -30px;

    &::after {
      content: '\A';
    }
  }
`;

const Subtitle = styled.p`
  font-size: 19px;
  color: white;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 1rem;
    text-align: center;
    margin-left: -30px;
  }
`;

const LineBreak = styled.hr`
  width: 80%;
  max-width: 600px;
  border: none;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 0, 193, 0) 0%, rgba(255, 0, 193, 0.8) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 80%, rgba(0, 191, 255, 0) 100%);
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    width: 90%;
    max-width: 500px;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 400px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1.5rem;
  }
`;

const CardContainerWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.75rem;
  }
`;

export default About;