import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HostSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
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
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 0.3s forwards;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 0.6s forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 95%;
  max-width: 1200px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 0.9s forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: ${props => props.isHovered ? '900px' : '700px'}; 
  height: 700px;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  border: 2px solid rgba(255, 20, 213, 0.3);

  &:hover {
    box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px, rgba(181, 133, 249, 0.27) 0px 0px 64px 20px;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Host = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <HostSection ref={sectionRef} style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
      <LineBreak style={{ animationPlayState: isVisible ? 'running' : 'paused' }} />
      <Header style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>Host your own agents or create with us!</Header>
      <ImageContainer style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
        <Image 
          src={image6} 
          alt="Host your own agents" 
          isHovered={hoveredImage === 'image6'}
          onMouseEnter={() => setHoveredImage('image6')}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <Image 
          src={image7} 
          alt="Create with us" 
          isHovered={hoveredImage === 'image7'}
          onMouseEnter={() => setHoveredImage('image7')}
          onMouseLeave={() => setHoveredImage(null)}
        />
      </ImageContainer>
    </HostSection>
  );
};

export default Host;
