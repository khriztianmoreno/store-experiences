import styled, { css } from 'styled-components';

export const LogoContainer = styled('div')(
  (props) => css`
    display: none;
    background-color: ${props.theme.colors.stratos};
    padding: 18px 56px;

    img {
      width: ${props.small ? '140px' : '232px'};
    }

    @media (min-width: 992px) {
      display: block;
    }
  `
);

export const LogoMobileContainer = styled('div')(
  (props) => css`
    display: block;
    background-color: ${props.theme.colors.stratos};
    padding: 14px 0;
    text-align: center;

    img {
      width: 232px;
    }

    @media (min-width: 992px) {
      display: none;
    }
  `
);
