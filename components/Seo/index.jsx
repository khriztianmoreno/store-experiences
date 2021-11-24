const Seo = (props) => {
  const {
    title = 'Planes para el día a día - Tienda Experiencias',
    description = 'Descripción: Regala y regálate experiencias, planes y momentos que te dejen grandes recuerdos. Con Tienda Experiencias los tienes todos en un solo lugar. Conócelos ahora.',
    url = 'https://www.tiendaexperiencias.com/',
    image = 'https://res.cloudinary.com/khriztianmoreno/image/upload/v1638290590/tienda_experiencias/Imagen-preview.jpg',
  } = props;

  return (
    <>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="preconnect" href="https://res.cloudinary.com" />
    </>
  );
};

export default Seo;
