import styled, { css } from 'styled-components';

export const Main = styled('main')(
  (props) => css`
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    color: ${props.theme.colors.stratos};
    background-color: ${props.theme.colors.white};
    margin-top: 50px;
    padding: 40px;
  `
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
