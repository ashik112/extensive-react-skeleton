/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './pages/Login';
import Sidebar from './layouts/Sidebar';
import { historyRoutes } from './routes';
import history from './services/history';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    {/* loading can be null */}
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route exact path={historyRoutes.login} component={LoginPage} />
          <Sidebar />
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
