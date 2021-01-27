import React from 'react';
import { Provider } from 'next-auth/client';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  return (
    <div className="app">
      <Provider session={session}>
        <Component {...pageProps} />
        <ToastContainer hideProgressBar />
      </Provider>
    </div>
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
