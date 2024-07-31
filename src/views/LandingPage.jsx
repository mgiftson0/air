 import styled from 'styled-components';
import Hero from '../components/hero/Hero';
// We'll import other sections as we create them
// import Services from './Services';
// import About from './About';
// import Contact from './Contact';

const LandingPage = () => {
  return (
    <PageWrapper>
      <Hero />
      {/* We'll add other sections here as we create them */}
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  // Add any global styles here if needed
`;

export default LandingPage;