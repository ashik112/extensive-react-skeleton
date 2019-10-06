/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { userExist } from '../helpers/userHelper';
import { historyRoutes } from './index';

/**
 * * [Conditional rendering with Authentication]
 */
export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          /*userExist()*/
          true
            ? <Component {...props} />
            : <Redirect to={historyRoutes.login} />
        )}
      />
    </>
  );
}
