import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { GlobalStyles } from '../components/Theme/GlobalStyles';
import theme from '../components/Theme/Theme';

function StoreExpirience({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default StoreExpirience;
