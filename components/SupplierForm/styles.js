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

  label {
    color: #010040;
  }
`;

export const ButtonForm = styled('button')(
  (props) => css`
    background-color: ${props.theme.colors.yellow};
    border-radius: 4px;
    border: 0px;
    color: ${props.theme.colors.stratos};
    font-family: ${props.theme.fonts.duruSans};
    font-size: 16px;
    height: 40px;
    line-height: 18px;
    margin-top: 10px;
    width: 200px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
);

export const TextForm = styled('span')(
  (props) => css`
    color: ${props.theme.colors.stratos};
    font-family: ${props.theme.fonts.duruSans};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
  `
);

export const TextareaForm = styled.textarea`
  height: 100px;
  border-radius: 4px;
`;

export const AceptTerms = styled.label`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;

  label {
    font-size: 12px;
    line-height: 18px;
  }
`;
