/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './containers/AuthenticationBundle/views/pages/LoginPage';
import historyRoutes from './routes/historyRoutes';
import history from './constants/history';
import UnauthenticatedRouting from './routes/UnauthenticatedRouting';
import LayoutWrapper from './containers/Layouts/LayoutWrapper';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    {/* loading can be null */}
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <UnauthenticatedRouting exact path={historyRoutes.login} component={LoginPage} />
          <LayoutWrapper />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
};

export default Root;
