import styled from 'styled-components';
import { GitHub, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const SocialCard = () => {
  return (
    <SocialCardWrapper>
      <SocialCardContent>
        <SocialCardIcons>
          <SocialCardIcon href="https://github.com/mgiftson0" target="_blank" aria-label="GitHub">
            <GitHub />
          </SocialCardIcon>
          <SocialCardIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter />
          </SocialCardIcon>
          <SocialCardIcon href="https://www.instagram.com/msabali_?igsh=NnJiMW81YXM1Y3Qz&utm_source=qr" target="_blank" aria-label="Instagram">
            <Instagram />
          </SocialCardIcon>
          <SocialCardIcon href="/https://www.linkedin.com/in/emmanuel-donkor-30189b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" aria-label="LinkedIn">
            <LinkedIn />
          </SocialCardIcon>
          <SocialCardIcon as={Link} href="https://sabali-mu.vercel.app/" aria-label="Website">
            &#127760;
          </SocialCardIcon>
        </SocialCardIcons>
      </SocialCardContent>
    </SocialCardWrapper>
  );
};

const SocialCardWrapper = styled.footer`
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
// background: linear-gradient(90deg, rgba(18,18,68,1) 0%, rgba(109,109,129,1) 0%, rgba(126,126,161,1) 50%, rgba(158,148,198,1) 100%);
  max-width: 300px; 
  margin: 0 auto;
   border: 1px solid rgb(87, 60, 125);
  border-radius: 20px;

  &:hover {
    box-shadow: rgb(191, 150, 250) 0px 0px 40px 1px inset;
  }

  @media (max-width: 480px) {
    max-width: 70%; 
    padding: 0 0.5rem;
  }
`;

const SocialCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%; 
`;

const SocialCardIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SocialCardIcon = styled.a`
  color: gray;
  font-size: 2rem; 
  transition: color 0.3s ease, transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;

const Link = styled(SocialCardIcon)`
  font-size: 1.5rem;
  text-decoration: none;
`;

export default SocialCard;
