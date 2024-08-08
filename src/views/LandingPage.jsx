import styled from 'styled-components';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import SocialCard from '../components/socialcard/SocialCard';
import Category from '../components/categories/Category';
import Host from '../components/Host/Host';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  return (
    <PageWrapper>
      <Hero />
      {/* We'll add other sections here as we create them */}
      {/* <Services /> */}
      <About />
      {/* <Contact /> */}
      <Category />
      <Host />
      <SocialCard />
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