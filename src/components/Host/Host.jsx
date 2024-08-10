import { useState } from 'react';
import styled from 'styled-components';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';

const HostSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const LineBreak = styled.hr`
  width: 80%;
  max-width: 600px;
  border: none;
  height: 2px;
  background: linear-gradient(90deg,
    rgba(255, 0, 193, 0) 0%,
    rgba(255, 0, 193, 0.8) 20%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(0, 191, 255, 0.8) 80%,
    rgba(0, 191, 255, 0) 100%
  );
  margin-bottom: 30px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Header = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  color: white;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImage = styled.img`
  width: 450px;
  height: auto;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  border: 2px solid rgba(255, 20, 213, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px, rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  }

  @media (max-width: 768px) {
    width: 80%;
    max-width: 350px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
  }
`;

const Host = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <HostSection>
      <LineBreak />
      <Header>Host your own agents or create with us!</Header>
      <ImageContainer>
        <StyledImage
          $isHovered={hoveredImage === 'image6'}
          onMouseEnter={() => setHoveredImage('image6')}
          onMouseLeave={() => setHoveredImage(null)}
          src={image6}
          alt="Host your own agents"
        />
        <StyledImage
          $isHovered={hoveredImage === 'image7'}
          onMouseEnter={() => setHoveredImage('image7')}
          onMouseLeave={() => setHoveredImage(null)}
          src={image7}
          alt="Create with us"
        />
      </ImageContainer>
    </HostSection>
  );
};

export default Host;