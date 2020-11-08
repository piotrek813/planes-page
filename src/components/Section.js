import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import Header from 'components/Header';
import List from 'components/List';
import PropTypes from 'prop-types';

const StyledWrapper = styled.section`
  background: ${({ theme, bgColor }) => theme.colors[bgColor]};
  padding: ${({ theme, isPaddingSmall }) => (isPaddingSmall ? theme.layout.padding.mobile.small : theme.layout.padding.mobile.normal)};
  ${({is100vh}) => is100vh && css`min-height: 100vh;`};

  ${({ theme, isPaddingSmall }) =>
    isPaddingSmall
      ? css`
          padding: ${theme.layout.padding.mobile.small};
          &:first-of-type {
            padding-top: ${theme.layout.padding.mobile.top};
          }
          &:last-of-type {
            padding-bottom: ${theme.layout.padding.mobile.top};
          }
        `
      : css`
          padding: ${theme.layout.padding.mobile.normal};
        `}

  ${({ theme, isPaddingSmall }) => theme.mq.tablet`
        ${isPaddingSmall
            ? css`
                padding: ${theme.layout.padding.tablet.small};
                &:first-of-type {
                  padding-top: ${theme.layout.padding.tablet.top};
                }
                &:last-of-type {
                  padding-bottom: ${theme.layout.padding.tablet.top};
                }
              `
            : css`
                padding: ${theme.layout.padding.tablet.normal};
        `}
    `}

  ${({ theme, isPaddingSmall, isManyImage }) => theme.mq.bigTablet`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;

        ${isPaddingSmall
            ? css`
                padding: ${theme.layout.padding.desktop.small};
                &:first-of-type {
                  padding-top: ${theme.layout.padding.desktop.top};
                }
                &:last-of-type {
                  padding-bottom: ${theme.layout.padding.desktop.top};
                }
              `
            : css`
                padding: ${theme.layout.padding.desktop.normal};
        `}

        ${isManyImage
            && css`
              display: block;
        `}
    `}

 ${({ theme }) => theme.mq.bigTablet`
        grid-gap: 92px;
    `}
`;

const StyledP = styled.p`
  line-height: 1.2;
`;

const StyledImageContainer = styled.div`
  ${({ theme, isManyImage }) => theme.mq.bigTablet`
        ${isManyImage
            && css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 67px;
        `}
    `}
`;

const StyledImg = styled(Img)`
  margin-top: 2em;

  ${({ theme, isSingle }) =>
    !isSingle &&
    css`
      &:first-of-type {
        margin: 0;
      }

      img {
        object-fit: contain !important;
        width: 100%;
      }

      ${theme.mq.bigTablet`
          img {
            height: unset !important;
          }

          margin: 0;
      `}
    `}
`;

const StyledTextContent = styled.div`
  ${({theme}) => theme.mq.bigTablet`
      margin: auto 0;
  `}
`;


const Section = ({ bgColor, heading, textContent, images, isPaddingSmall, headerType, is100vh }) => (
  <StyledWrapper bgColor={bgColor} isPaddingSmall={isPaddingSmall} isManyImage={images.length > 1} is100vh={is100vh}>
    <StyledTextContent>
    <Header as={headerType} headerType={headerType}>{heading}</Header>
    {textContent.type === 'list' && (
      <List content={textContent.content} />
    )}
    {textContent.type === 'text' && <StyledP>{textContent.content}</StyledP>}
    </StyledTextContent>
    <StyledImageContainer isManyImage={images.length > 1}>{images !== undefined && images.map((image) => <StyledImg isSingle={images.length === 1} key={image.childImageSharp.fluid.originalName} fluid={image.childImageSharp.fluid} alt={image.childImageSharp.fluid.originalName} />)}</StyledImageContainer>
  </StyledWrapper>
);

Section.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  heading: PropTypes.string.isRequired,
  textContent: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])),
  bgColor: PropTypes.oneOf(['orange', 'pink', 'purple']),
  isPaddingSmall: PropTypes.bool,
  headerType: PropTypes.oneOf(['h1', 'h2']),
  is100vh: PropTypes.bool
};

Section.defaultProps = {
  images: [],
  textContent: {},
  bgColor: 'orange',
  isPaddingSmall: false,
  headerType: 'h2',
  is100vh: false,
};

export default Section;
