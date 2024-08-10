import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Card1 from './Card1';
import Card2 from './Card2';

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CardContainer = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <CardContainerWrapper ref={containerRef} $isVisible={isVisible}>
      <Card2 hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} delay="0.2s" />
      <Card1 hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
    </CardContainerWrapper>
  );
};

const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 32px;
  margin-top: 50px;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;

  & > *:first-child {
    animation: ${props => props.$isVisible ? slideInFromLeft : 'none'} 1s ease-out forwards;
  }

  & > *:last-child {
    animation: ${props => props.$isVisible ? slideInFromRight : 'none'} 1s ease-out forwards;
  }

  @media (max-width: 1200px) {
    gap: 24px;
    padding: 24px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 16px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-left: -10px;
  }

  & > * {
    max-width: 100%;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  @media (min-width: 769px) {
    & > *:hover {
      transform: scale(1.05);
    }

    & > *:hover + * {
      transform: scale(0.95);
    }
  }
`;

export default CardContainer;