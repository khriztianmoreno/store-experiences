import Image from 'next/image';

import { LogoContainer } from './styles';

const URL =
  'https://res.cloudinary.com/khriztianmoreno/image/upload/v1634078681/tienda_experiencias/logo.png';

function Logo() {
  return (
    <LogoContainer>
      <img src={URL} alt="Logo" />
    </LogoContainer>
  );
}

export default Logo;
