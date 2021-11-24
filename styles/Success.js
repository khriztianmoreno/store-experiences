import styled, { css } from 'styled-components';

export const Root = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.white};
    min-height: 100vh;
  `
);

const heightNavbar = '78px';

export const Main = styled('main')(
  (props) => css`
    color: ${props.theme.colors.stratos};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 992px) {
      align-content: space-between;
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-height: 100vh;
    }

    & > div {
      width: 100%;

      @media (min-width: 992px) {
        width: 400px;
      }
    }
  `
);

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 64px;

  h3 {
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 15px;
  margin-bottom: 65px;
  text-align: center;

  @media (min-width: 992px) {
    margin-top: 100px;
  }
`;

export const MessageContaienr = styled.div`
  position: relative;
  min-height: 220px;
`;

export const InstagramLink = styled('a')(
  (props) => css`
    color: ${props.theme.colors.electricViolet};
  `
);

export const Messages = styled.div`
  position: absolute;
  z-index: 2;

  @media (min-width: 992px) {
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    width: 400px;
  }
`;

export const Circle = styled.div`
  background-color: #efa893;
  border-radius: 50%;
  height: 208px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  top: -30px;
  width: 208px;
`;
