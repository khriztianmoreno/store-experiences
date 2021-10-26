import { LogoContainer, LogoMobileContainer } from './styles';

const URL =
  'https://res.cloudinary.com/khriztianmoreno/image/upload/v1634254340/tienda_experiencias/logo_dark.png';

function Logo({ small = false }) {
  return (
    <LogoContainer small={small}>
      <img src={URL} alt="Logo" />
    </LogoContainer>
  );
}

export function LogoMobile() {
  return (
    <LogoMobileContainer>
      <img src={URL} alt="Logo Mobile" />
    </LogoMobileContainer>
  );
}

export default Logo;
