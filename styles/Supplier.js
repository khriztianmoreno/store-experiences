import styled, { css } from 'styled-components';

export const Root = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.grey};
    min-height: 100vh;
  `
);

export const Main = styled('main')(
  (props) => css`
    background-color: ${props.theme.colors.grey};
    color: ${props.theme.colors.stratos};
    display: flex;
    flex-direction: column;
    position: relative;

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

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 65px;
  text-align: center;
`;

export const ContainerBlock = styled.div`
  margin-bottom: 80px;
  min-height: 300px;
  position: relative;
`;

export const ContainerBlockTitle = styled('h2')(
  (props) => css`
    font-family: ${props.theme.fonts.droidSans};
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    margin-bottom: 40px;
    text-align: center;
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
      gap: 50px;
      text-align: justify;
      margin-bottom: 50px;

      h2 {
        text-align: center;
        margin-top: 0px;
      }
    }
  }

  @media (min-width: 1200px) {
    div.content {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1350px) {
    div.content {
      margin-bottom: 0;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 15px 30px;
  margin-bottom: 40px;
  overflow-x: scroll;
  padding: 10px 15px 15px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px 30px;
  }
`;

export const CategoryCard = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.alto};
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    max-width: 120px;
    padding: 10px;

    p {
      color: ${props.theme.colors.stratos};
      font-family: ${props.theme.fonts.duruSans};
      font-size: 14px;
      font-style: normal;
      font-weight: bold;
      line-height: 15px;
    }
  `
);

export const Messages = styled.div`
  position: absolute;
  z-index: 2;

  /* @media (min-width: 992px) {
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    width: 400px;
  } */
`;

export const Circle = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.brightTurquoise};
    border-radius: 50%;
    height: 208px;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    width: 208px;
  `
);
