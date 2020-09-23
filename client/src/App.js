import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
import Skill from './components/Skill';
// import Inventory from './components/Inventory';
import Footer from './components/Footer';
// import Login from './components/Login';

import './App.css';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <HeroSection /> */}
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Skill />
        {/* <Inventory /> */}
        {/* <Login /> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
