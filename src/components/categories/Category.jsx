import styled, { keyframes } from 'styled-components';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image5.png';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-left: -15px;

  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    margin-left: -20ppx;
    
  }
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  align-self: flex-start;
  margin-right: auto;


  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    border-radius: 8px;
    width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    margin-left: -10px;
    margin-bottom: 10px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: none;
    }
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ff00c1, #00bfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 1rem;
  }
`;

const lineBreakAnimation = keyframes`
  0% { width: 0; opacity: 0; }
  50% { width: 300px; opacity: 1; }
  100% { width: 250px; opacity: 0.8; }
`;

const LineBreakWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  margin: 3rem 0;
  animation: ${fadeIn} 1s ease-out 0.7s both;

  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }

  @media (max-width: 480px) {
    margin: 2rem 0;
  }
`;

const LineBreak = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${lineBreakAnimation} 2s ease-in-out forwards;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 4px solid;
    border-image: linear-gradient(135deg, rgba(255, 0, 193, 0.8) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 191, 255, 0.8) 100%) 1;
  }

  &::before {
    margin-right: 0.7em;
  }

  &::after {
    margin-left: 0.7em;
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      border-bottom-width: 3px;
    }
  }

  @media (max-width: 480px) {
    &::before,
    &::after {
      border-bottom-width: 2px;
    }
  }
`;

const LineBreakText = styled.span`
  color: white;
  padding: 0 15px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AppList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out 0.9s both;

  @media (max-width: 1024px) {
    gap: 0.7rem;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    font-size: 10px;
    margin-left: -15px;
    // font-size: 10px;
  }
`;

// const LineBreak2 = styled.hr`
//   width: 80%;
//   max-width: 600px;
//   border: none;
//   height: 2px;
//   background: linear-gradient(90deg, 
//     rgba(255, 0, 193, 0) 0%, 
//     rgba(255, 0, 193, 0.8) 20%, 
//     rgba(255, 255, 255, 0.8) 50%, 
//     rgba(0, 191, 255, 0.8) 80%, 
//     rgba(0, 191, 255, 0) 100%
//   );
//   margin-bottom: 3rem;
//   animation: ${fadeIn} 1s ease-out;

//   @media (max-width: 1024px) {
//     margin-bottom: 2.5rem;
//   }

//   @media (max-width: 768px) {
//     margin-bottom: 2rem;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 1.5rem;
//   }
// `;

const AppItem = styled.li`
  background-color: rgba(87, 60, 125, 0.5);
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 1.1rem;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(87, 60, 125, 0.8);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.45rem 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Category = () => {
  const categoryRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'ease-out',
      reset: true
    });

    sr.reveal(categoryRef.current.children, { interval: 100 });
  }, []);

  return (
    
    <CategoryWrapper ref={categoryRef}>
      <ContentWrapper>
        <ImageContainer>
          <Image src={image1} alt="Integrated Apps" />
        </ImageContainer>
        <ContentContainer>
          <Title>Integrate All Your Favorite Apps</Title>
          <Description>
            Seamlessly connect and utilize a wide range of popular applications to enhance your workflow and productivity. Our platform brings together the tools you love, creating a unified ecosystem for all your needs.
          </Description>
          <AppList>
            <AppItem>Google Drive</AppItem>
            <AppItem>Figma</AppItem>
            <AppItem>Midjourney</AppItem>
            <AppItem>Sora</AppItem>
            <AppItem>Youtube</AppItem>
            <AppItem>Tradingview</AppItem>
            <AppItem>Twitter</AppItem>
            <AppItem>LinkedIn</AppItem>
            <AppItem>Etherscan</AppItem>
            <AppItem>Slack</AppItem>
            <AppItem>Shopify</AppItem>
            <AppItem>Amazon</AppItem>
            <AppItem>eBay</AppItem>
          </AppList>
        </ContentContainer>
      </ContentWrapper>

      <LineBreakWrapper>
        <LineBreak>
          <LineBreakText>Use</LineBreakText>
        </LineBreak>
      </LineBreakWrapper>

      <ContentWrapper>
        <ContentContainer>
          <Title>Leverage Your AI Workforce</Title>
          <Description>
            Once you have selected or configured an agent team, begin chatting to your built-in project manager to describe your goal, provide relevant information, give feedback, and approve results. Gone are the days of doing the legwork yourself - just engage your on-demand AI workforce and relax as you watch your ideas come to life.
          </Description>
        </ContentContainer>
        <ImageContainer>
          <Image src={image2} alt="AI Workforce" />
        </ImageContainer>
      </ContentWrapper>
    </CategoryWrapper>
  );
};

export default Category;