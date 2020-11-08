import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Hamburger from 'components/Hamburger';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightenOrange};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px ${({theme}) => theme.layout.padding.mobile.horizontal};

  ${({theme}) => theme.mq.tablet`
    padding: 20px ${theme.layout.padding.tablet.horizontal};
  `}

  ${({theme}) => theme.mq.bigTablet`
    padding: 20px ${theme.layout.padding.desktop.horizontal};
  `}
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  background: ${({ theme }) => theme.colors.lightenOrange};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  height: 100vh;
  width: 60vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-60vw')});

  ${({theme}) => theme.mq.tablet`
    background: none;
    color: ${theme.colors.white};
    font-size: inherit;
    height: auto;
    width: auto;
    position: static;
    display: unset;
    transform: none;
  `}
`;

const StyledHamburger = styled(Hamburger)`
  ${({theme}) => theme.mq.tablet`
      display: none;
  `}
`;

const StyledListItem = styled.li`
  display: inline;
  margin: 15px;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.white} !important;
  text-decoration: none;
`;

const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white} !important;
  text-decoration: none;

  ${({theme}) => theme.mq.tablet`
    position: relative;
    color: ${theme.colors.white} !important;

    &::before {
      content: '';
      display: block;
      height: 2px;
      background: ${theme.colors.white};
      position: absolute;
      bottom: -3px;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transition: transform ease-in-out 0.25s;
    }

    &:hover::before {
      transform: scale(1, 1);
    }
  `}
`;

const Navbar = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const NavItems = [
    { to: '/', label: 'Budowa' },
    { to: '/typy', label: 'Typy' },
    { to: '/ciekawostki', label: 'Ciekawostki' },
  ];

  const handleDocumentClick = (e) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(e.target) &&
      isMenuOpen === true
    ) {
      toggleMenuOpen(false);
    }
  };

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    toggleMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [navbarRef, isMenuOpen]);

  return (
    <StyledNav>
      <StyledLogo to="/">Home</StyledLogo>
      <StyledHamburger isOpen={isMenuOpen} onClick={handleHamburgerClick} />
      <StyledList isOpen={isMenuOpen} ref={navbarRef}>
        {NavItems.map(({ to, label }) => (
          <StyledListItem key={to}>
              <StyledNavLink to={to}>{label}</StyledNavLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
