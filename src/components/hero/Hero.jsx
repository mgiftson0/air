import styled, { keyframes } from 'styled-components';
import Header from '../header/Header';
import { ComputerOutlined, CloudOutlined, SecurityOutlined, SupportOutlined } from '@mui/icons-material';

const Hero = () => {
  const services = [
    { title: 'Custom Software', icon: <ComputerOutlined /> },
    { title: 'Cloud Services', icon: <CloudOutlined /> },
    { title: 'Cybersecurity', icon: <SecurityOutlined /> },
    { title: 'IT Support', icon: <SupportOutlined /> },
  ];

  return (
    <HeroWrapper>
      <Header />
      <BackgroundCards>
        {services.map((service, index) => (
          <BackgroundCard key={index} index={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
          </BackgroundCard>
        ))}
      </BackgroundCards>
      <HeroContentWrapper>
        <HeroContent>
          <HeroTitle>IT</HeroTitle>
          <HeroSubtitle>something goes here</HeroSubtitle>
          <HeroButton>Learn More</HeroButton>
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

const HeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  // background: linear-gradient(135deg,rgb(248,248,255) 0%,  rgb(242,243,244)100%);
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  overflow: hidden;
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
  width: 200px;
  height: 200px;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.index * 0.5}s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0066cc;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 5%;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0052a3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Hero;
