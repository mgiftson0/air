import styled, { keyframes } from 'styled-components';
import Header from '../header/Header';
import { ComputerOutlined, CloudOutlined, SecurityOutlined, SupportOutlined } from '@mui/icons-material';


const AnimatedLineBreak = () => {
  return (
    <LineBreakContainer>
      <LineBreak />
    </LineBreakContainer>
  );
};

const Hero = () => {
  return (
    <HeroWrapper>
      <Header />
      <BackgroundCards>
        <BackgroundCard>
          <IconWrapper>
            <ComputerOutlined />
          </IconWrapper>
          <CardTitle>AI Solutions</CardTitle>
        </BackgroundCard>
        <BackgroundCard>
          <IconWrapper>
            <CloudOutlined />
          </IconWrapper>
          <CardTitle>Cloud AI</CardTitle>
        </BackgroundCard>
        <BackgroundCard>
          <IconWrapper>
            <SecurityOutlined />
          </IconWrapper>
          <CardTitle>AI Security</CardTitle>
        </BackgroundCard>
        <BackgroundCard>
          <IconWrapper>
            <SupportOutlined />
          </IconWrapper>
          <CardTitle>Support AI</CardTitle>
        </BackgroundCard>
      </BackgroundCards>
      <HeroContentWrapper>
        <HeroContent>
          <HeroTitle>
            Empowering Autonomous Teams
          </HeroTitle>
          <AnimatedLineBreak />
          <HeroSubtitle>
            Discover and deploy cutting-edge AI solutions that enhance productivity and drive innovation. Our platform connects you with expert AI teams tailored to your needs, transforming how you achieve your goals.
          </HeroSubtitle>
          <HeroButton>Get Started</HeroButton>
        </HeroContent>
      </HeroContentWrapper>
    </HeroWrapper>
  );
};

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const lineAnimation = keyframes`
  0% { width: 0; opacity: 0; }
  50% { width: 100%; opacity: 1; }
  100% { width: 80%; opacity: 0.8; }
`;

const HeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
background: linear-gradient(90deg, rgba(18,18,68,1) 0%, rgba(29,29,37,1) 50%, rgba(51,40,93,1) 100%);  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
`;

const BackgroundCards = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  opacity: 0.1;
  pointer-events: none;
`;

const BackgroundCard = styled.div`
  background: linear-gradient(135deg, rgba(58, 58, 76, 0.6) 0%, rgba(42, 42, 60, 0.6) 100%);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 250px;
  height: 250px;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.8;

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    padding: 1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #0066cc;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
const LineBreakContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;
const LineBreak = styled.div`
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(255, 0, 193, 0) 0%, 
    rgba(255, 0, 193, 0.8) 20%, 
    rgba(255, 255, 255, 0.8) 50%, 
    rgba(0, 191, 255, 0.8) 80%, 
    rgba(0, 191, 255, 0) 100%
  );
  animation: ${lineAnimation} 3s ease-in-out infinite;
  max-width: 600px;
  width: 80%;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5%;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  animation: ${fadeIn} 1.5s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.75rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const buttonAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


const HeroButton = styled.button`
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(0, 191, 255, 0.8) 100%);
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${buttonAnimation} 3s ease infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

export default Hero;