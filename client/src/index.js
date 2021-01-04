import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import withSession from './components/withSession';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Service from './components/Service';
import Products from './components/Products';
import GetArgumentsCar from './components/GetArgumentsCar';
// import AdminDashboard from './user/AdminDashboard';
import { ADD_CAR } from './queries';
import Profile from './components/Profile/Profile';
import AddCategory from './admin/AddCategory';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : '',
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Root = ({ refetch, session }) => (
  <Router>
    <>
      <Navbar session={session} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/signin'
          render={() => <Signin refetch={refetch} />}
        />
        <Route
          exact
          path='/signup'
          render={() => <Signup refetch={refetch} />}
        />
        <Route
          path='/profile'
          exact
          render={() => <Profile session={session} />}
        />

        <Route
          path='/add/category'
          exact
          render={() => <AddCategory session={session} />}
        />
        <Route path='/service' component={Service} />
        <Route path='/products' component={Products} />
        {/* <Route
          path='/admin/dashboard'
          component={AdminDashboard}
          session={session}
        /> */}

        {/* <Route
          path='/car/add'
          render={() => <ADD_CAR session={session} refetch={refetch} />}
        /> */}

        <Route path='/:category/cars' component={GetArgumentsCar} />

        <Redirect to='/' />
      </Switch>
    </>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root'),
);
