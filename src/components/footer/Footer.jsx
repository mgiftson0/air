import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialIcons>
          <SocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <LinkedIn />
          </SocialIcon>
        </SocialIcons>
        {/* <FooterText>© {new Date().getFullYear()} Your Company. All rights reserved.</FooterText> */}
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px; 
  padding: 0 1rem;
  position: fixed;
  bottom: 20px; 
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1));
  max-width: 500px; 
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2); 

  @media (max-width: 480px) {
    max-width: 70%; 
    padding: 0 0.5rem;
  }
     
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%; 
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem; 
`;

const SocialIcon = styled.a`
  color: gray;
  font-size: 4rem; 
  transition: color 0.3s ease;

  &:hover {
    color: #0066cc; 
    // transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
    transform: scale(1.9);
    color: white;
  }
`;

// const FooterText = styled.p`
//   color: white;
//   font-size: 0.8rem; /* Adjust font size if needed */
//   margin: 0;
// `;

export default Footer;
