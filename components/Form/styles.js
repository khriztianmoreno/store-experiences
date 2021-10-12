import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const LabelForm = styled.label`
  font-size: 14px;
  line-height: 18px;
`;

export const InputForm = styled.input`
  height: 34px;
  border-radius: 4px;
  margin-bottom: 25px;
`;

export const CheckForm = styled.input`
  width: 20px;
  height: 20px;
  margin-top: 15px;

  :checked {
    background-color: #074ee8;
  }
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

export const ButtonForm = styled.button`
  background-color: #f4ea0c;
  height: 40px;
  width: 200px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
`;

export const TextForm = styled.span`
  font-size: 14px;
  line-height: 16px;
`;

export const AceptTerms = styled.label`
  font-size: 12px;
  line-height: 18px;
`;
