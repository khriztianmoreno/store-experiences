import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  figure {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Droid Sans;
    background-color: #010040;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  p {
    font-family: Duru Sans;
  }

  input[type="text"]
  {
    font-size: 18px;
    border: 2px solid #AAAAAA;
  }

  input[type="email"]
  {
    font-size: 18px;
    border: 2px solid #AAAAAA;
  }

  textarea
  {
    font-size: 18px;
    border: 2px solid #AAAAAA;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 2px solid #AAAAAA;
    background-color: #fff;
    border-radius: 2px;
  }

  input:checked ~ .checkmark {
    background-color: #074EE8;
    border: 0px;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  label.label-form {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
    padding-left: 30px;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: Duru Sans;

    > .checkmark:after {
      left: 7px;
      top: 3px;
      width: 3px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
