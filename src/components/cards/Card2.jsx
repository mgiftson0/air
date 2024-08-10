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
  padding: 10px;
  width: ${props => props.$isHovered ? 'fit-content' : props.$otherHovered ? 'fit-content' : 'fit-content'};
  height: 530px;
  position: relative;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s forwards;
  animation-delay: ${props => props.$delay || '0s'};
  opacity: 0;

  &:hover {
    transform: scale(1.05);
    border: 1px solid rgb(191, 150, 250);    
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset;
  }

  @media (max-width: 1200px) {
    width: fit-content;
  }

  @media (max-width: 768px) {
    width: fit-content;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 500px;
    padding: 16px;
    // margin-left: -30px;

  }
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  width: fit-content;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  border-radius: 25px;
  background-color: transparent;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px , rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  }

  @media (max-width: 768px) {
    padding: 5px;
  }

  @media (max-width: 480px) {
    padding: 3px;
    width: 100%;
    border-radius: 15px;
    margin-top: 40px;
    padding-top: 10px;
    
    &:hover {
      box-shadow: rgb(87, 60, 125) 0px 0px 20px 1px , rgba(181, 133, 249, 0.27) 0px 0px 32px 10px;
    }
  }
`;

const CarouselCard = styled.div`
  flex: 0 0 auto;
  width: 150px;
  height: 300px;
  border: 1px solid rgb(191, 150, 250);
  margin-right: 16px;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset, rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease;
  padding: 16px;
  animation: ${floatAnimation} 3s ease-in-out infinite;

  &:hover {
    width: 220px;
    border-color: rgba(255, 20, 213, 1);
    animation-play-state: paused;
  }

  &:hover ~ & {
    width: 180px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 270px;
    margin-right: 12px;
    padding: 12px;

    &:hover {
      width: 200px;
    }

    &:hover ~ & {
      width: 160px;
    }
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 200px;
    margin-right: 8px;
    padding: 8px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &:hover {
      width: 110px;
    }

    &:hover ~ & {
      width: 110px;
    }
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 16px;
  font-size: 30px;
  color: #00FFFF;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const CardTitle = styled.h3`
  font-size: 15px;
  color: white;
  margin-bottom: 8px;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CardDescription = styled.p`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const TextSection = styled.div`
  margin-top: 32px;
  text-align: center;
  padding: 0 16px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    margin-top: 24px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    margin-top: 16px;
    padding: 0 8px;
  }
`;
 
const Title = styled.h2`
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const SvgContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  display: none;
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
      $isHovered={hoveredCard === 'card2'}
      $otherHovered={hoveredCard === 'card1'}
      $delay={delay}
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