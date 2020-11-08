import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  border: none;
  background: none;
  padding: 15px;
`;

const InnnerHamburger = styled.div`
  position: relative;
  width: 34px;
  height: 3px;
  border-radius: 5px;
  background: ${({ theme, isOpen }) => (isOpen ? 'none' : theme.colors.white)};
  transition: background-color 0.25s ease-in-out;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 34px;
    height: 3px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white};
    transition: transform 0.25s ease-in-out;
  }

  &::before {
    top: -8px;
    transform: translateY(${({ isOpen }) => (isOpen ? '8px' : '0px')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  &::after {
    top: 8px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-8px' : '0px')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isOpen: false,
};

export default Hamburger;
