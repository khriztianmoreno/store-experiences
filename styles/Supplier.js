import styled, { css } from 'styled-components';

export const Main = styled('main')(
  (props) => css`
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    color: ${props.theme.colors.stratos};
    background-color: ${props.theme.colors.white};
    margin-top: 50px;

    @media (min-width: 992px) {
      display: grid;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      grid-template-columns: 1.5fr 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
    }
  `
);

export const FormContainer = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.white};
    color: ${props.theme.colors.stratos};
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 30px 80px;
    position: relative;
    text-align: left;

    @media (min-width: 992px) {
      grid-area: 1 / 2 / 2 / 3;
      height: auto;
    }
  `
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 80px 0px 80px 80px;
  align-items: center;
  justify-content: center;

  h2 {
    width: 50%;
  }

  div.content {
    margin-top: 80px;
    display: flex;

    div:first-of-type {
      margin-right: 80px;
    }
  }
`;
