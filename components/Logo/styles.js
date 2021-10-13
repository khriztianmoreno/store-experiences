import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: none;
  left: 14%;
  position: absolute;
  top: 6%;

  img {
    width: 333px;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;
