import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: ${({ theme, headerType }) => {
    switch(headerType) {
      case 'h1':
        return theme.font.size.mobile.header;
      case 'h2':
        return theme.font.size.mobile.smallHeader;
      default:
        return theme.font.size.mobile.header
    }
  }};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 1.6rem;

  ${({ theme, headerType }) => theme.mq.tablet`
        margin-bottom: 3rem;
        font-size: ${() => {
          switch(headerType) {
            case 'h1':
              return theme.font.size.desktop.header;
            case 'h2':
              return theme.font.size.desktop.smallHeader;
            default:
              return theme.font.size.desktop.header
          }
        }};
    `}
`;

export default StyledH1;
