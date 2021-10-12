import Image from 'next/image';
import { useState, useEffect } from 'react';

const baseImage = 'https://res.cloudinary.com/khriztianmoreno/image/upload/';
const folder = 'tienda_experiencias';

const images = [
  `${baseImage}v1634005347/${folder}/helicoptero.png`,
  `${baseImage}v1634003456/${folder}/cabalgata.png`,
  `${baseImage}v1634005347/${folder}/picnic_en_casa.png`,
  `${baseImage}v1634005347/${folder}/medellin.png`,
  `${baseImage}v1634005347/${folder}/guatape_zocalos.png`,
  `${baseImage}v1634005347/${folder}/helicoptero.png`,
];

const randomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

function SideImage() {
  const [image, setImage] = useState(randomImage());

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(randomImage());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        transition: 'background-image 1s ease-in-out',
      }}
    />
  );
}

export default SideImage;
