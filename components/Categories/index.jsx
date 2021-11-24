import { Container, CategoryCard } from './styles';

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

const Categories = () => (
  <Container>
    {categories.map((category) => (
      <CategoryCard key={category.img}>
        <img src={`${BASE_IMG_URL}${category.img}`} alt={category.title} />
        <p>{category.title}</p>
      </CategoryCard>
    ))}
  </Container>
);

export default Categories;
