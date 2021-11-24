import Link from 'next/link';

import {
  Circle,
  Divider,
  FormContainer,
  ImageContainer,
  Main,
  ProviderExperiences,
  ProviderLinkExperience,
} from '../styles/Home';

import Header from '../components/Header';
import Layout from '../components/Layout';
import SideImage from '../components/SideImage';
import RegisterForm from '../components/RegisterForm';
import CopyRight from '../components/CopyRight';
import Logo, { LogoMobile } from '../components/Logo';

function Home() {
  return (
    <Layout>
      <Header />
      <Main>
        <ImageContainer>
          <Logo />
          <SideImage />
        </ImageContainer>
        <FormContainer>
          <LogoMobile />
          <h2>¿Buscando planes memorables?</h2>
          <p>
            Vivir momentos únicos que queden por siempre en la memoria es algo
            en común que buscamos como personas.
          </p>

          <p>
            Vivir momentos únicos que queden por siempre en la memoria es algo
            en común que buscamos como personas. Has llegado a la comunidad que
            te brindará experiencias únicas e irrepetibles para vivir,
            compartir, regalar y recordar.
          </p>

          <p>
            Registrate gratis para ser parte del grupo elegido para el
            lanzamiento de experiencias personalizadas.{' '}
          </p>

          <h3>Regístrate</h3>
          <RegisterForm />
          <Divider />
          <ProviderExperiences>
            ¿Ofreces experiencias que quisieras incluir en nuestro portafolio?.
            <Link href="/supplier">
              <ProviderLinkExperience>Ingresa aquí</ProviderLinkExperience>
            </Link>
          </ProviderExperiences>
          <CopyRight />
          <Circle />
        </FormContainer>
      </Main>
    </Layout>
  );
}

export default Home;
