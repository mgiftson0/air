import { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card1 from './Card1';
import Card2 from './Card2';

const CardContainer = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <CardContainerWrapper>
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
  // margin-left: -50px;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  // background-color: yellow;

  @media (max-width: 1200px) {
    gap: 24px;
    padding: 24px;
    margin-top: 40px;
    // margin-left: -40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 16px;
    margin-top: 30px;
    // margin-left: -30px;
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