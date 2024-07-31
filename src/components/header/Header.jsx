import { useState } from 'react';
import styled from 'styled-components';
import { Menu, Close } from '@mui/icons-material';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Logo href="/">IT </Logo>
      <NavItems isOpen={isMenuOpen}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavItems>
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
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavItems = styled.nav`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    pointer-events: ${({ isOpen }) => isOpen ? 'auto' : 'none'};
  }
`;

const NavItem = styled.a`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
 

  &:hover {
    color: #0066cc;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;