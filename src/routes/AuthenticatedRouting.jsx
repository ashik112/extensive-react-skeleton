/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { userExist } from '../helpers/userHelper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { historyRoutes } from './index';

/**
 * * [Conditional rendering with Authentication]
 */
function AuthenticatedRouting({ component: Component, authReducer, ...rest }) {
  return (
    <>
      { authReducer.loggedIn && (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Component {...props} />
          </>
        )}
      />
      )}
      {
        !authReducer.loggedIn && (
          <Redirect exact to={historyRoutes.login} />
        )
      }
    </>
  );
}

AuthenticatedRouting.propTypes = {
  companyReducer: PropTypes.shape(),
  authReducer: PropTypes.shape(),
};

AuthenticatedRouting.defaultProps = {
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

export default connect(mapStateToProps, null)(AuthenticatedRouting);
