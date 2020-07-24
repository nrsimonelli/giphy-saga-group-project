import React, { Component } from 'react';
import './App.css'

// components import
import Search from '../Search/Search'
import Favorite from '../Favorite/Favorite';
import Welcome from '../Welcome/Welcome';

// hash router import
import { HashRouter as Router, Route } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <div className='theme'>
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route path="/Home" component={Welcome} />
          <Route path="/Search" component={Search} />
          <Route path="/Favorites" component={Favorite} />
        </Router>
      </div>
    );
  }
  
}

export default App;
