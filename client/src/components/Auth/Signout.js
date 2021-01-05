import React from 'react';
import { ApolloConsumer } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { Button } from '../Button';

const handleSignout = (client, history) => {
  localStorage.setItem('token', '');
  client.resetStore();
  history.push('/');
};

const Signout = ({ history, session }) => (
  <ApolloConsumer>
    {(client) => {
      return (
        <Button
          buttonStyle='btn--outline'
          session={session}
          onClick={() => handleSignout(client, history)}
        >
          {session && session.authUserProfile ? 'sign up' : 'sign out'}
        </Button>
      );
    }}
  </ApolloConsumer>
);
export default withRouter(Signout);
