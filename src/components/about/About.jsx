import styled from 'styled-components';
import Card from '../cards/Cards'; // Adjust the import path as needed

const About = () => {
  return (
    <AboutSection>
      <CardContainer>
        <Card title="Card 1" description="This is card 1." />
        <Card title="Card 2" description="This is card 2." />
        {/* <Card title="Card 3" description="This is card 3." /> */}
        {/* <Card title="Card 4" description="This is card 4." /> */}
      </CardContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  position: relative;
//   background: linear-gradient(135deg, rgba(255, 0, 193, 0.4) 0%, rgba(0, 191, 255, 0.4) 100%);
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
  /* Optional: Add extra padding to ensure cards don't touch the edges */
`;

export default About;
