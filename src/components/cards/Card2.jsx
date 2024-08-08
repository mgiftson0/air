import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ScrollReveal from 'scrollreveal';

// Define the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  // z-index: 10;
  transition: transform 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  &:hover {
    transform: scale(1.05);
    border: 1px solid rgb(191, 150, 250);    
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
`;

const CarouselCard = styled.div`
  flex: 0 0 auto;
  width: 200px; // Base width
  height: 300px;
  border: 1px solid rgb(191, 150, 250);
  margin-right: 1rem;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset, rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease;

  &:hover {
    width: 220px; // Increase width on hover
    border-color: rgba(255, 20, 213, 1);
  }

  &:hover ~ & {
    width: 180px; // Decrease width of other cards
  }
`;

const TextSection = styled.div`
  margin-top: 2rem;
  text-align: center;
  padding: 0 1rem;
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

const Card2 = ({ className, hoveredCard, setHoveredCard }) => {
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
      onMouseEnter={() => setHoveredCard('card2')} // Set hovered card
      onMouseLeave={() => setHoveredCard(null)} // Reset on leave
      style={{ width: hoveredCard === 'card2' ? '720px' : hoveredCard === 'card1' ? '680px' : '700px' }} // Adjust width based on hover
    >
      <Carousel>
        <CarouselCard>Card 1</CarouselCard>
        <CarouselCard>Card 2</CarouselCard>
        <CarouselCard>Card 3</CarouselCard>
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
};

export default Card2;