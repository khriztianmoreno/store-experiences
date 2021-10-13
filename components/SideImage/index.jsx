import { useState, useEffect } from 'react';

import { BackgroundContainer } from './styles';

const baseImage = 'https://res.cloudinary.com/khriztianmoreno/image/upload/';
const folder = 'tienda_experiencias';

const images = [
  `${baseImage}v1634005347/${folder}/helicoptero.png`,
  `${baseImage}v1634005347/${folder}/guatape.png`,
  `${baseImage}v1634003456/${folder}/cabalgata.png`,
  `${baseImage}v1634005347/${folder}/picnic_en_casa.png`,
  `${baseImage}v1634005347/${folder}/medellin.png`,
  `${baseImage}v1634005347/${folder}/guatape_zocalos.png`,
  `${baseImage}v1634005347/${folder}/experiencia_pareja.png`,
];

function SideImage() {
  const [image, setImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === images.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setImage(images[index]);
  }, [index]);

  return (
    <BackgroundContainer>
      <img src={image} alt="Random Experiences" />
    </BackgroundContainer>
  );
}

export default SideImage;
