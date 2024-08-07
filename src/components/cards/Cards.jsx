import  { useEffect, useRef } from 'react';
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

// Define the scale-up on hover animation
const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const Card = ({ className }) => {
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
    <CardWrapper className={className} ref={cardRef} />
  );
};

Card.propTypes = {
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
  z-index: 10;
  transition: transform 0.3s ease;
  transform: translateY(-50%);
  margin-top: 150px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  &:hover {
    // animation: ${scaleUp} 0.3s forwards;
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
    margin-left: -30px;
  }
`;

export default Card;