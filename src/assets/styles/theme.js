import {css} from 'styled-components';

export const breakpoints = {
  huge: '1700',
  bigDesktop: '1440',
  desktop: '1150',
  bigTablet: '900',
  tablet: '767',
  bigPhone: '400',
  phone: '320',
};

export const colors = {
  white: '#FFFFFF',
  orange: '#F08A5D',
  lightenOrange: '#F99366',
  pink: '#B83B5E',
  purple: '#6A2C70',
};

export const font = {
  family: 'Montserrat',
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    mobile: {
      header: '3rem',
      smallHeading: '2.4rem',
      normal: '1.8rem',
    },
    desktop: {
      header: '4rem',
      smallHeading: '3rem',
      normal: '1.8rem',
    },
  },
};

export const mq =  Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const theme = {
  colors,
  mq,
  font,
  layout: {
    padding: {
      mobile: {
        normal: '50px 30px',
        small: '25px 30px',
        top: '50px',
        horizontal: '30px'
      },
      tablet: {
        normal:  '136px 73px',
        small: '60px 73px',
        top: '136px',
        horizontal: '73px'

      },
      desktop: {
        normal:  '136px 73px',
        small:  '87px 73px',
        top: '136px',
        horizontal: '73px'
      },
    }
  },
  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
  },
};
