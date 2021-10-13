import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../components/Theme/GlobalStyles';
import theme from '../components/Theme/Theme';

function StoreExpirience({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default StoreExpirience;
