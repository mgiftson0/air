import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import ScrollReveal from 'scrollreveal';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

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
  padding: 20px;
  width: 450px;
  height: auto;
  min-height: 500px;
  margin-left: 20px;
  position: relative;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  &:hover {
    transform: scale(1.05);
    border: 1px solid rgb(191, 150, 250);    
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px inset;
  }

  @media (max-width: 768px) {
    width: 370px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 300px;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50%;
  ${props => props.$position === 'left' ? 'left: 5px;' : 'right: 5px;'}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 14px;
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
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 18px;
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
    font-size: 12px;
  }
`;

const Card1 = ({ className, hoveredCard, setHoveredCard }) => {
  const cardRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image2, image3, image4];

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

export default Card1;