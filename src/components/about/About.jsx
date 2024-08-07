import styled from 'styled-components';
import Card from '../cards/Cards'; 

const About = () => {
  return (
    <AboutSection>
      <CardContainer>
        <Card title="Card 1" description="This is card 1." />
        <Card title="Card 2" description="This is card 2." />
      </CardContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  position: relative;
  color: white;
  margin-top: -10px;
  padding: 2rem;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem; /* Adjust gap between cards */
  justify-content: center; /* Center align the cards horizontally */
  position: relative;
  z-index: 10;
  padding: 1rem;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    flex-direction: column; /* Stack cards vertically on smaller screens */
    align-items: center; /* Center align the cards vertically */
  }
`;

export default About;
