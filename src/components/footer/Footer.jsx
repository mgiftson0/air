import styled from 'styled-components';
import { Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const FooterContainer = styled.footer`
  color: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FooterContent = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    text-align: center;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
  box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px , rgba(181, 133, 249, 0.9) 0px 0px 64px 20px;

  }
`;

const Copyright = styled.p`
  margin: 1rem 0 0;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
  
   &:hover {
  box-shadow: rgb(87, 60, 125) 0px 0px 40px 1px , rgba(181, 133, 249, 1) 0px 0px 64px 20px;

  }

`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>Air</h3>
        <p>innovative solutions for your business needs.</p>
      </FooterContent>
      <SocialIcons>
        <SocialIcon href="https://github.com/mgiftson0" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/msabali_?igsh=NnJiMW81YXM1Y3Qz&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </SocialIcon>
        <SocialIcon href="/https://www.linkedin.com/in/emmanuel-donkor-30189b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </SocialIcon>
      </SocialIcons>
      <Copyright>
        &copy; {new Date().getFullYear()} manuel. All rights reserved. | <Link href="https://sabali-mu.vercel.app/">manuel &#127760;</Link>
        
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
