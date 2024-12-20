import styled, { css } from 'styled-components';

import * as HeadingStyles from '@/components/Heading/styles';
import * as LogoStyles from '@/components/Logo/styles';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => `
    position: relative;
    background-image: url(/img/auth-bg.png);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => `
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};

    a {
      width: fit-content;
      height: fit-content;
    }
`}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};
    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => `
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => `
    width: 30rem;

     ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
 `}
`;
