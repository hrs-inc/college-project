import { useQuery } from '@apollo/client';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GET_CURRENT_USER } from '../queries';

const AdminRoute = (Component) => {
  const { data, loading } = useQuery(GET_CURRENT_USER);
  return (
    <Route
      {...rest}
      render={(props) =>
        data.authUserProfile.role === 1 ? (
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

export default AdminRoute;
