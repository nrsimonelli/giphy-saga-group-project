import React, { Component } from 'react';
import Search from '../Search/Search'
import Favorite from '../Favorite/Favorite';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
        <Favorite />
      </div>
    );
  }
  
}

export default App;
