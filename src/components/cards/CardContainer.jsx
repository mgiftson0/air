import Card1 from '../cards/Card1'; // Adjust path as necessary
import Card2 from '../cards/Card2'; // Adjust path as necessary
import styled from 'styled-components';

const CardContainer = () => {
  return (
    <CardContainerWrapper>
      <Card2 />
      <Card1 />
    </CardContainerWrapper>
  );
};

const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem; 
  align-items: center;
  justify-content: center; 
  padding: 2rem;
  margin-top: 50px;
  margin-left: -50px;

  /* Ensure cards stay within the container */
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%; 
  width: 100%; 

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%; 
  }
    @media (max-width: 480px) {
      display: flex;
  flex-direction: column; 
  gap: 2rem; 
  align-items: center; 
  justify-content: center; 
  padding: 2rem;
  margin-top: 150px;

  }

  /* Ensure child elements (cards) stay within container */
  & > * {
    max-width: 100%;
    flex-shrink: 0; /* Prevent cards from shrinking */
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
