import styled, { css } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  @media (min-width: 992px) {
    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const ImageContainer = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.brightTurquoise};
    display: none;
    position: relative;

    @media (min-width: 992px) {
      display: block;
    }
  `
);

export const ImageContainerMobile = styled('div')(
  (props) => css`
    display: flex;
    position: relative;
    margin-bottom: 70px;
    height: 130px;
    align-items: center;

    h2 {
      width: 50%;
      font-size: large;
      padding-right: 10px;
    }

    .circle {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background-color: ${props.theme.colors.tacao};
      z-index: 9;
      left: 0;
      bottom: -40px;
      position: absolute;
      right: 0;
      margin: auto;
    }

    > div {
      width: 50%;

      right: -35px;
      img {
        height: 130px;
      }
    }

    @media (min-width: 992px) {
      margin-bottom: 0px;
      height: auto;

      h2 {
        width: 100%;
      }

      > div {
        display: none;
      }
    }
  `
);

export const FormContainer = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.stratos};
    color: ${props.theme.colors.white};
    padding: 35px;
    position: relative;
    text-align: left;

    @media (min-width: 992px) {
      grid-area: 1 / 2 / 2 / 3;
      height: auto;
      padding: 0 100px;
    }
  `
);

export const Circle = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.tacao};
    display: none;

    @media (min-width: 992px) {
      border-radius: 50%;
      display: block;
      height: 124px;
      left: -60px;
      position: absolute;
      top: 6%;
      width: 124px;
    }
  `
);

export const Divider = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.mercury};
    height: 1px;
    margin: 60px 0px 10px 0px;
    width: 100%;
  `
);

export const ProviderExperiences = styled.span`
  font-size: 12px;
  line-height: 16px;
`;

export const ProviderLinkExperience = styled('a')(
  (props) => css`
    color: ${props.theme.colors.electricViolet};
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    text-decoration: underline;
    padding-left: 10px;
  `
);
