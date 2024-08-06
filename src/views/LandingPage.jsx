import styled from 'styled-components';
import Hero from '../components/hero/Hero';
// We'll import other sections as we create them
// import Services from './Services';
import About from '../components/about/About';
// import Contact from './Contact';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  return (
    <PageWrapper>
      <Hero />
      {/* We'll add other sections here as we create them */}
      {/* <Services /> */}
      <About />
      {/* <Contact /> */}
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px; /* Adjust to the height of the footer */
`;

export default LandingPage;
