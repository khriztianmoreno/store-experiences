import styled, { css } from 'styled-components';

export const Main = styled('main')(
  (props) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${props.theme.colors.grey};
    color: ${props.theme.colors.stratos};

    @media (min-width: 992px) {
      display: grid;
      grid-template-rows: 1fr;

      div.supplier {
        display: grid;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-template-columns: 1.3fr 1fr;
        grid-template-rows: 1fr;
      }
    }
  `
);

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 0px 35px;
  position: relative;
  text-align: left;

  @media (min-width: 992px) {
    height: auto;
    padding: 50px 100px 0px 50px;
  }
`;

export const Container = styled.div`
  padding: 50px 35px 0px;
  text-align: center;

  div.content {
    text-align: justify;

    h2 {
      text-align: center;
      margin-top: 50px;
    }
  }

  @media (min-width: 992px) {
    padding: 50px 50px 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    div.content {
      display: flex;
      text-align: justify;

      h2 {
        text-align: center;
        margin-top: 0px;
      }

      div:first-of-type {
        margin-right: 60px;
      }
    }
  }
`;

export const Categories = styled('div')(
  (props) => css`
    display: flex;
    div {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background-color: ${props.theme.colors.electricViolet};
      margin-right: 20px;
    }

    div:last-of-type {
      margin-right: 0px;
    }

    @media (min-width: 992px) {
      display: flex;
      div {
        width: 85px;
        height: 85px;
        background-color: ${props.theme.colors.electricViolet};
        margin-right: 20px;
      }

      div:last-of-type {
        margin-right: 0px;
      }
    }
  `
);
