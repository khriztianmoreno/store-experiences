import styled, { css } from 'styled-components';

export const Container = styled.div`
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

  div:last-child {
    margin-right: 30px;
    @media (min-width: 992px) {
      margin-right: 0;
    }
  }
`;

export const CategoryCard = styled('div')(
  (props) => css`
    background-color: ${props.theme.colors.alto};
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    max-width: 120px;
    padding: 10px;
    text-align: center;

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
