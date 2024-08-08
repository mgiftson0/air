import styled from 'styled-components';
import CardContainer from '../cards/CardContainer'; // Adjust path as necessary

const About = () => {
  return (
    <AboutSection>
      <Header>
        Browse Autonomous AI Agents
        <Subtitle>Browse the marketplace for individual agents or pre-built agent teams curated by our community.</Subtitle>
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
  padding: 4rem 2rem 2rem; /* Increased top padding for spacing */
  min-height: 100vh;
  text-align: center;
  // background-color: #000; 
`;

const Header = styled.h1`
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 2rem; 
  text-align: center;
  
  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    white-space: pre-line;
    &::after {
      content: '\A';
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
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
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

const CardContainerWrapper = styled.div`
  margin-top: 2rem; /* Ensure space between header and cards */
  width: 100%; // Added to ensure full width
`;

export default About;
