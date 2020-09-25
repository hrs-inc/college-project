import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Skill from './components/Skill';
// import Inventory from './components/Inventory';
import Footer from './components/Footer';
// import Login from './components/Login';

import './App.css';
import Home from './components/pages/Home';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
          <Skill />
          {/* <Login /> */}
          <Footer />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
