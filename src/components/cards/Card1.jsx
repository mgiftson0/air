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

const Card1 = ({ className, hoveredCard, setHoveredCard }) => {
  const cardRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/src/assets/image2.jpg',
    '/src/assets/image3.jpg',
    '/src/assets/image4.jpg'
  ];

  useEffect(() => {
    if (cardRef.current) {
      ScrollReveal().reveal(cardRef.current, {
        delay: 200,
        distance: '20px',
        duration: 400,
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
      onMouseEnter={() => setHoveredCard('card1')}
      onMouseLeave={() => setHoveredCard(null)}
      $isHovered={hoveredCard === 'card1'}
      $otherHovered={hoveredCard === 'card2'}
    >
      <ImageContainer>
        <Image src={images[currentImage]} alt={`Image ${currentImage + 2}`} />
        <NavButton onClick={prevImage} $position="left">
          &lt;
        </NavButton>
        <NavButton onClick={nextImage} $position="right">
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
  hoveredCard: PropTypes.string,
  setHoveredCard: PropTypes.func,
};

const CardWrapper = styled.div`
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid rgb(87, 60, 125);
  box-shadow: none;
  padding: 32px;
  width: ${props => props.$isHovered ? '720px' : props.$otherHovered ? '680px' : '700px'};
  height: 500px;
  position: center;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  &:hover {
    border: 2px solid rgb(191, 150, 250);
        box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset;

  }

  @media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
    padding: 24px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 450px;
    padding: 16px;
    margin-left: -30px;
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 60%;
  }
`;

const Image = styled.img`
  max-width: 160px;
  max-height: 100px;
  object-fit: contain;
  border-radius: 15px;
  border: 2px solid rgb(87, 60, 125);

  @media (max-width: 480px) {
    max-width: 95%;
    max-height: 95%;
    border-radius: 10px;
    margin-top: -120px;
  }
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
  ${props => props.$position === 'left' ? 'left: 10px;' : 'right: 10px;'}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const TextSection = styled.div`
  margin-top: 16px;
  text-align: center;
  padding: 0 16px;

  @media (max-width: 768px) {
    margin-top: 12px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    margin-top: 8px;
    padding: 0 8px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    text-align: center;
  }
`;

export default Card1;