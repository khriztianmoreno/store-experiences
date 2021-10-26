import { FormContainer, Main, Container, Categories } from '../styles/Supplier';
import Header from '../components/Header';
import CopyRight from '../components/CopyRight';
import Logo, { LogoMobile } from '../components/Logo';
import SupplierForm from '../components/SupplierForm';

function Supplier() {
  return (
    <>
      <Header />
      <Logo small />
      <LogoMobile />
      <Main>
        <div className="supplier">
          <Container>
            <h2>
              Hemos lledago al mercadeo de Antioquia para posicionar el Turismo
              Experiencial
            </h2>
            <div className="content">
              <div>
                <h2>¿Qué es Tienda Experiencias?</h2>
                <p>
                  El turismo sostenible y experiencial es nuestra consigna.
                  Buscamos aliados del sector del entretenimiento, hotelero,
                  turistico, gastronomico y experiencial para apalancarnos
                  mutualmente y hacer de la industria de las experiencia una
                  necesidad latente en nuestros clientes. Únete a nosotros y
                  postula tus productos o servicios que apliquen a las
                  categorías.
                </p>
              </div>
              <div>
                <h2>¿Porqué estar con nosotros?</h2>
                <p>
                  Hacer parte de Tienda Experiencias te permitirá consolidar tus
                  servicios y los de otros apasionados del sector turismo,
                  gastronomico y e experiencias en un solo punto, convirtiendose
                  en un nuevo canal cercanos a tus clientes. Además, tendrás un
                  grupo de aliados que buscan en el trabajo colaborativo una
                  manera de potenciar la la industraria de los sevicios.{' '}
                </p>
              </div>
            </div>
            <Categories>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </Categories>
          </Container>
          <FormContainer>
            <h2>Postula tu experiencia</h2>
            <SupplierForm />
          </FormContainer>
        </div>
        <CopyRight />
      </Main>
    </>
  );
}

export default Supplier;
