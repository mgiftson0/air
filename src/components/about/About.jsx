import styled from 'styled-components';
import CardContainer from '../cards/CardContainer'; // Adjust path as necessary

const About = () => {
  return (
    <AboutSection>
      <LineBreak />
      <Header>
        Browse Autonomous AI Agents
        <Subtitle>
         marketplace for individual agents or pre-built agent teams curated by our us.
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
  padding: 50px 30px 30px;
  min-height: 100vh;
  text-align: center;

  @media (max-width: 1200px) {
    padding: 40px 20px 20px;
  }

  @media (max-width: 768px) {
    padding: 32px 16px 16px;
  }

  @media (max-width: 480px) {
    padding: 24px 12px 12px;
  }
`;

const Header = styled.h1`
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 27px;
  margin-bottom: 32px;
  text-align: center;
  margin-left: -35px;
  margin-top: 30px;

  @media (max-width: 1200px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
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
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 16px;
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
  margin-bottom: -48px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    width: 90%;
    max-width: 500px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 400px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 24px;
  }
`;

const CardContainerWrapper = styled.div`
  margin-top: 32px;
  width: 100%;

  @media (max-width: 1200px) {
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 12px;
  }
`;

export default About;