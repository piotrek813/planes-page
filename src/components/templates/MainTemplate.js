import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import Nav from 'components/Nav';

const Main = styled.main`
  margin-top: 70px;

  ${theme.mq.tablet`
    margin-top: 50px;
  `}
`;

const MainTemplate = ({ children, title }) => {
  return (
    <>
      <Helmet lang="pl" title={title} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Main>
          <article>
            {children}
          </article>
        </Main>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
