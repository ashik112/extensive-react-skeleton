/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { historyRoutes } from './index';
//import { userExist } from '../helpers/userHelper';

/**
 * * [Conditional rendering with Authentication]
 */
function UnauthenticatedRouting({ component: Component, authReducer, ...rest }) {
  return (
    <>
      {
        !authReducer.loggedIn && (
          <Route
            {...rest}
            render={(props) => (
              <Component {...props} />
            )}
          />
        )
      }
      {
        authReducer.loggedIn && (
          <Redirect exact from={historyRoutes.login} to={historyRoutes.dashboard} />
        )
      }
    </>
  );
}

UnauthenticatedRouting.propTypes = {
  companyReducer: PropTypes.shape(),
  authReducer: PropTypes.shape(),
};

UnauthenticatedRouting.defaultProps = {
  companyReducer: {
    data: {
      company: {
        name: '',
      },
    },
  },
  authReducer: {
    loggedIn: false,
  },
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps, null)(UnauthenticatedRouting);
