import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, Close } from '@mui/icons-material';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper $scrolling={scrolling}>
      <Logo href="/">Air</Logo>
      <NavItemsWrapper>
        <NavItems $isOpen={isMenuOpen}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </NavItems>
      </NavItemsWrapper>
      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <Close /> : <Menu />}
      </MenuIcon>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Full width of the viewport */
  max-width: ${({ $scrolling }) => ($scrolling ? '900px' : '1200px')}; 
  margin: 20px auto 0; /* Margin on top, centered horizontally */
  padding: ${({ $scrolling }) => ($scrolling ? '0.5rem 1rem' : '1rem 2rem')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(255, 0, 193, 0.3) 0%, rgba(0, 191, 255, 0.3) 100%); 
  border-radius: ${({ $scrolling }) => ($scrolling ? '20px' : '20px')}; 
  box-shadow: ${({ $scrolling }) => ($scrolling ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none')}; 
  transition: padding 0.3s ease, max-width 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: ${({ $scrolling }) => ($scrolling ? '0.5rem' : '0.75rem')};
    max-width: 90%; /* Reduce width on smaller screens */
    margin-top: 15px; /* Reduced margin-top for smaller screens */
  }

  @media (max-width: 480px) {
    padding: ${({ $scrolling }) => ($scrolling ? '0.5rem' : '0.5rem')}; 
    max-width: ${({ $scrolling }) => ($scrolling ? '80%' : '90%')}; 
    margin-top: 10px; 
  }
`;

const Logo = styled.a`
  font-size: ${({ $scrolling }) => ($scrolling ? '1.25rem' : '1.5rem')};
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: font-size 0.3s ease;

  @media (max-width: 768px) {
    font-size: ${({ $scrolling }) => ($scrolling ? '1rem' : '1.25rem')}; 
  }

  @media (max-width: 480px) {
    font-size: ${({ $scrolling }) => ($scrolling ? '0.875rem' : '1rem')}; 
  }
`;

const NavItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavItems = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, rgba(255, 0, 193, 0.2) 0%, rgba(0, 191, 255, 0.2) 100%); 
    padding: 1rem;
    border-radius: 8px; 
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
    font-size: 0.9rem; 
  }

  @media (max-width: 480px) {
    font-size: 0.8rem; 
    gap: 0.5rem; 
    max-width: 95%; 
  }
`;

const NavItem = styled.a`
  margin: 0;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: center;

  &:hover {
    color: #0066cc;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }

  @media (max-width: 480px) {
    margin: 0.3rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; 
  }
`;

export default Header;