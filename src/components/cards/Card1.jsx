import { useEffect, useRef, useState } from 'react';
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

const Card1 = ({ className }) => {
  const cardRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/src/assets/image2.jpg',
    '/src/assets/image3.jpg',
    '/src/assets/image4.jpg'
  ];
  const [hoveredCard, setHoveredCard] = useState(null); // Add state for hovered card

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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <CardWrapper
      ref={cardRef}
      className={className}
      onMouseEnter={() => setHoveredCard('card1')} // Set hovered card
      onMouseLeave={() => setHoveredCard(null)} // Reset on leave
      style={{ width: hoveredCard === 'card1' ? '720px' : hoveredCard === 'card2' ? '680px' : '700px' }} // Adjust width based on hover
    >
      <ImageContainer>
        <Image src={images[currentImage]} alt={`Image ${currentImage + 2}`} />
        <NavButton onClick={prevImage} left>
          &lt;
        </NavButton>
        <NavButton onClick={nextImage} right>
          &gt;
        </NavButton>
      </ImageContainer>
      <TextSection>
        <Title>Pre-configured teams</Title>
        <Subtitle>Browse and deploy pre-configured agent teams curated by our community.</Subtitle>
      </TextSection>
    </CardWrapper>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
};

const CardWrapper = styled.div`
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid rgb(87, 60, 125);
  box-shadow: none;
  padding: 2rem;
  width: 700px;
  height: 500px;
  position: relative;
  transition: transform 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  &:hover {
    border: 2px solid rgb(191, 150, 250);
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

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 15px;
  border: 2px solid rgb(87, 60, 125);
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50%;
  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const TextSection = styled.div`
  margin-top: 1rem;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default Card1;