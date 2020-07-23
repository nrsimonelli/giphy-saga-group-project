import React, { Component } from 'react';
import Search from '../Search/Search'
import Favorites from '../Favorites/Favorites';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
        <Favorites />
      </div>
    );
  }
  
}

export default App;
