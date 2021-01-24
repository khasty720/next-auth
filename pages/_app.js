import React from 'react';
import { Provider } from 'next-auth/client';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
