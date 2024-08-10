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
  padding: 32px;
  gap: 32px;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-left: -15px;

  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
    margin-left: -20ppx;
    
  }
`;

const Image = styled.img`
  width: 500px;
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
  font-size: 30px;
  margin-bottom: 24px;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ff00c1, #00bfff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 27px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
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
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 16px;
  }
`;

const lineBreakAnimation = keyframes`
  0% { width: 0; opacity: 0; }
  // 50% { width: 300px; opacity: 1; }
  // 100% { width: 250px; opacity: 0.8; }
`;

const LineBreakWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  margin: 48px 0;
  animation: ${fadeIn} 1s ease-out 0.7s both;

  @media (max-width: 768px) {
    margin: 40px 0;
  }

  @media (max-width: 480px) {
    margin: 32px 0;
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
    margin-right: 11px;
  }

  &::after {
    margin-left: 11px;
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
  font-size: 19px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const AppList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out 0.9s both;

  @media (max-width: 1024px) {
    gap: 7px;
  }

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    font-size: 9px;
    margin-left: -10px;
  }
`;

const AppItem = styled.li`
  background-color: rgba(87, 60, 125, 0.5);
  padding: 9px 19px;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(87, 60, 125, 0.8);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 7px 14px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Category = () => {
  const categoryRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      reset: true
    });

    sr.reveal(categoryRef.current.children, { 
      interval: 100,
      mobile: true,
      viewFactor: 0.2
    });
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