import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { BarChart, Code, Brush } from '@mui/icons-material';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const CardWrapper = styled.div`
  background-color: transparent;
  border-radius: 25px;
  border: 1px solid rgb(87, 60, 125);
  box-shadow: none;
  padding: 2rem;
  width: 700px;
  height: 500px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;

  &:hover {
    transform: scale(1.05);
    border: 1px solid rgb(191, 150, 250);    
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset;
  }

  @media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 330px;
    height: 500px;
    padding: 1rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  border-radius: 25px;
  background-color: transparent;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px , rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  }
`;

const CarouselCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  border: 1px solid rgb(191, 150, 250);
  margin-right: 1rem;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset, rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease;
  padding: 1rem;
  animation: ${floatAnimation} 3s ease-in-out infinite;

  &:hover {
    width: 220px;
    border-color: rgba(255, 20, 213, 1);
    animation-play-state: paused;
  }

  &:hover ~ & {
    width: 180px;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
  font-size: 4rem;
  color: #00FFFF;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const TextSection = styled.div`
  margin-top: 2rem;
  text-align: center;
  padding: 0 1rem;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 0.5s;
`;
 
const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.25rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SvgContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
`;

const Card2 = ({ className, hoveredCard, setHoveredCard, delay = '0s' }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      ScrollReveal().reveal(cardRef.current, {
        delay: 200,
        distance: '20px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true
      });
    }
  }, []);

  return (
    <CardWrapper
      ref={cardRef}
      className={className}
      onMouseEnter={() => setHoveredCard('card2')}
      onMouseLeave={() => setHoveredCard(null)}
      style={{ width: hoveredCard === 'card2' ? '720px' : hoveredCard === 'card1' ? '680px' : '700px' }}
      delay={delay}
    >
      <SvgContainer>
        <svg width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="rgb(191, 150, 250)" strokeWidth="4" fill="none" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="rgb(191, 150, 250)" strokeWidth="4" />
        </svg>
      </SvgContainer>
      <Carousel>
        <CarouselCard>
          <IconWrapper>
            <BarChart />
          </IconWrapper>
          <CardTitle>Data Analyst</CardTitle>
          <CardDescription>Expert in analyzing and interpreting complex data sets</CardDescription>
        </CarouselCard>
        <CarouselCard>
          <IconWrapper>
            <Code />
          </IconWrapper>
          <CardTitle>Web Developer</CardTitle>
          <CardDescription>Skilled in creating responsive and dynamic web applications</CardDescription>
        </CarouselCard>
        <CarouselCard>
          <IconWrapper>
            <Brush />
          </IconWrapper>
          <CardTitle>Graphic Designer</CardTitle>
          <CardDescription>Creative professional specializing in visual communication and aesthetics</CardDescription>
        </CarouselCard>
      </Carousel>
      <TextSection>
        <Title>Individual AI Agents</Title>
        <Subtitle>Select any number of individual agents and add them to your custom workforce.</Subtitle>
      </TextSection>
    </CardWrapper>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  hoveredCard: PropTypes.string,
  setHoveredCard: PropTypes.func,
  delay: PropTypes.string,
};

export default Card2;