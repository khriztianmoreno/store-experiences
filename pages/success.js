import { useRouter } from 'next/router';

import Header from '../components/Header';
import CopyRight from '../components/CopyRight';
import Logo, { LogoMobile } from '../components/Logo';

import {
  Circle,
  Container,
  InstagramLink,
  Main,
  MessageContaienr,
  Messages,
  Root,
  Title,
} from '../styles/Success';

function Success() {
  const { query } = useRouter();

  const profile = query?.type;

  return (
    <Root>
      <Header />
      <Logo small />
      <LogoMobile />
      <Main>
        <div>
          <Container>
            <Title>¡Registro exitoso!</Title>
            <MessageContaienr>
              <Circle />
              <Messages>
                <p>
                  Ahora haces parte de la comunidad de planes, viajes y
                  experiencias. El lugar donde encontrarás lo ideal para regalar
                  y vivir tus tiempos libres.
                </p>
                {profile === 'supplier' ? (
                  <p>Espera próximamente noticias en tu correo.</p>
                ) : (
                  <>
                    <p>Te estaremos contactando próximamente.</p>
                    <p>
                      Síguenos en Instagram{' '}
                      <InstagramLink href="https://instagram.com">
                        @TiendaExperiencias
                      </InstagramLink>
                    </p>
                  </>
                )}
              </Messages>
            </MessageContaienr>
            <h3>Las mejores cosas de la vida no son cosas. Son momentos</h3>
          </Container>
          <CopyRight />
        </div>
      </Main>
    </Root>
  );
}

export default Success;
