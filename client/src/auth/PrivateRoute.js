import { useQuery } from '@apollo/client';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GET_CURRENT_USER } from '../queries';

const PrivateRoute = ({ Component, ...rest }) => {
  const { data } = useQuery(GET_CURRENT_USER);
  return (
    <Route
      {...rest}
      render={(props) =>
        data.authUserProfile ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
