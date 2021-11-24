import Layout from '../components/Layout';
import Header from '../components/Header';
import CopyRight from '../components/CopyRight';
import Logo, { LogoMobile } from '../components/Logo';
import SupplierForm from '../components/SupplierForm';
import Categories from '../components/Categories';

import {
  Circle,
  Container,
  ContainerBlock,
  ContainerBlockTitle,
  FormContainer,
  Main,
  Messages,
  Root,
  Title,
  CategoryMobileContianer,
  CategoryDesktopContianer,
} from '../styles/Supplier';

function Supplier() {
  return (
    <Layout>
      <Root>
        <Header />
        <Logo small />
        <LogoMobile />
        <Main>
          <div className="supplier">
            <Container>
              <Title>
                Hemos lledago al mercadeo de Antioquia para posicionar el
                Turismo Experiencial
              </Title>
              <div className="content">
                <ContainerBlock>
                  <ContainerBlockTitle>
                    ¿Qué es Tienda Experiencias?
                  </ContainerBlockTitle>
                  <Circle />
                  <Messages>
                    <p>
                      El turismo sostenible y experiencial es nuestra consigna.
                      Buscamos aliados del sector del entretenimiento, hotelero,
                      turistico, gastronomico y experiencial para apalancarnos
                      mutualmente y hacer de la industria de las experiencia una
                      necesidad latente en nuestros clientes. Únete a nosotros y
                      postula tus productos o servicios que apliquen a las
                      categorías.
                    </p>
                  </Messages>
                </ContainerBlock>
                <ContainerBlock>
                  <ContainerBlockTitle>
                    ¿Porqué estar con nosotros?
                  </ContainerBlockTitle>
                  <Circle />
                  <Messages>
                    <p>
                      Hacer parte de Tienda Experiencias te permitirá consolidar
                      tus servicios y los de otros apasionados del sector
                      turismo, gastronomico y e experiencias en un solo punto,
                      convirtiendose en un nuevo canal cercanos a tus clientes.
                      Además, tendrás un grupo de aliados que buscan en el
                      trabajo colaborativo una manera de potenciar la la
                      industraria de los sevicios.
                    </p>
                  </Messages>
                </ContainerBlock>
              </div>
              <CategoryDesktopContianer>
                <Categories />
              </CategoryDesktopContianer>
            </Container>
            <CategoryMobileContianer>
              <Categories />
            </CategoryMobileContianer>
            <FormContainer>
              <h2>Postula tu experiencia</h2>
              <SupplierForm />
            </FormContainer>
          </div>
          <CopyRight />
        </Main>
      </Root>
    </Layout>
  );
}

export default Supplier;
