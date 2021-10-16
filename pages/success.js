import { Main, Container } from '../styles/Success';
import Header from '../components/Header';
import CopyRight from '../components/CopyRight';
import Logo, { LogoMobile } from '../components/Logo';

function Success() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <h2>¡Registro exitoso!</h2>
          <p>
            Ahora haces parte de la comunidad de planes, viajes y experiencias.
            El lugar donde encontrarás lo ideal para regalar y vivir tus tiempos
            libres. Espera próximamente noticias en tu correo.
          </p>
          <h3>Las mejores cosas de la vida no son cosas. Son momentos</h3>
          <Logo />
          <LogoMobile />
        </Container>
        <CopyRight />
      </Main>
    </>
  );
}

export default Success;
