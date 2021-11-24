import Header from '../components/Header';
import CopyRight from '../components/CopyRight';
import Logo, { LogoMobile } from '../components/Logo';
import SupplierForm from '../components/SupplierForm';

import {
  Categories,
  CategoryCard,
  Circle,
  Container,
  ContainerBlock,
  ContainerBlockTitle,
  FormContainer,
  Main,
  Messages,
  Root,
  Title,
} from '../styles/Supplier';

const BASE_IMG_URL =
  'https://res.cloudinary.com/khriztianmoreno/image/upload/v1637719906/tienda_experiencias/cat/';

const categories = [
  {
    img: 'sticker_1.png',
    title: 'Naturaleza',
  },
  {
    img: 'sticker_8.png',
    title: 'Románticos',
  },
  {
    img: 'sticker_7.png',
    title: 'Espiritualidad y Relajación',
  },
  {
    img: 'sticker_6.png',
    title: 'Cultural',
  },
  {
    img: 'sticker_5.png',
    title: 'Turismo',
  },
  {
    img: 'sticker_4.png',
    title: 'Estilo de vida exclusivo',
  },
  {
    img: 'sticker_3.png',
    title: 'Gastronómico',
  },
  {
    img: 'sticker_2.png',
    title: 'Aventura',
  },
];

function Supplier() {
  return (
    <Root>
      <Header />
      <Logo small />
      <LogoMobile />
      <Main>
        <div className="supplier">
          <Container>
            <Title>
              Hemos lledago al mercadeo de Antioquia para posicionar el Turismo
              Experiencial
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
                    tus servicios y los de otros apasionados del sector turismo,
                    gastronomico y e experiencias en un solo punto,
                    convirtiendose en un nuevo canal cercanos a tus clientes.
                    Además, tendrás un grupo de aliados que buscan en el trabajo
                    colaborativo una manera de potenciar la la industraria de
                    los sevicios.
                  </p>
                </Messages>
              </ContainerBlock>
            </div>
            <Categories>
              {categories.map((category) => (
                <CategoryCard key={category.img}>
                  <img
                    src={`${BASE_IMG_URL}${category.img}`}
                    alt={category.title}
                  />
                  <p>{category.title}</p>
                </CategoryCard>
              ))}
            </Categories>
          </Container>
          <FormContainer>
            <h2>Postula tu experiencia</h2>
            <SupplierForm />
          </FormContainer>
        </div>
        <CopyRight />
      </Main>
    </Root>
  );
}

export default Supplier;
