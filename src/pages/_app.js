import '../../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../styles/theme';
// import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;