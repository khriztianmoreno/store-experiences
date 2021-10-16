import { Container } from './styles';
import Image from 'next/image';

function Copyright() {
  return (
    <Container>
      <Image
        width={60}
        height={60}
        alt="Sticker"
        src="https://res.cloudinary.com/khriztianmoreno/image/upload/v1634086510/tienda_experiencias/sticker.png"
      />
      <p>Derechos reservados www.tiendaexperiencias.com - 2021</p>
    </Container>
  );
}

export default Copyright;
