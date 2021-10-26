import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const InputForm = styled.input`
  height: 34px;
  border-radius: 4px;
  margin: 5px 0px 25px;
`;

export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;

export const ButtonForm = styled('button')(
  (props) => css`
    background-color: ${props.theme.colors.yellow};
    background-color: #f4ea0c;
    height: 40px;
    width: 200px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 18px;
    border: 0px;
    margin-top: 10px;
    color: ${props.theme.colors.stratos};
  `
);

export const TextForm = styled.span`
  font-size: 14px;
  line-height: 16px;
`;

export const AceptTerms = styled.label`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    font-size: 12px;
    line-height: 18px;
  }
`;
