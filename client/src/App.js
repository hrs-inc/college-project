import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Signup from './components/Auth/Signup';
// import Login from './components/Login';

import './App.css';
import Home from './components/pages/Home';
import GetArgumentsCar from './components/GetArgumentsCar';
import Signin from './components/Auth/Signin';
// import GetArgumentsCar from './components/GetArgumentsCar';

const App = ({ refetch }) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
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
        <Route path='/:category/cars' component={GetArgumentsCar} />
      </Switch>
      {/* <Skill /> */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
