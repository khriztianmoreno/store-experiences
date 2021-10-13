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
import SideImage from '../components/SideImage';
import Form from '../components/Form';
import CopyRight from '../components/CopyRight';
import Logo from '../components/Logo';

function Home() {
  return (
    <>
      <Header />
      <Main>
        <ImageContainer>
          <Logo />
          <SideImage />
        </ImageContainer>
        <FormContainer>
          <p>
            Vivir momentos únicos es quizá uno de los motivos que a muchos nos
            une como humanos.
          </p>

          <p>
            Has llegado a la comunidad que te brindará experiencias únicas e
            irrepetibles para vivir, compartir, regalar y recordar.
          </p>

          <p>Bienvenidos a Tienda Experiencias</p>
          <h3>Regístrate</h3>
          <Form />
          <Divider />
          <ProviderExperiences>
            ¿Ofreces experiencias que quisieras incluir en nuestro portafolio?.
            <ProviderLinkExperience> Ingresa aquí</ProviderLinkExperience>
          </ProviderExperiences>
          {/* <CopyRight /> */}
          <Circle />
        </FormContainer>
      </Main>
    </>
  );
}

export default Home;
