import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
//import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <Wrapper>
      <Router>
        <div>
          <Navbar/>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer/>  
        </div>
    </Router>
    </Wrapper>
    
  );
}

export default App;
