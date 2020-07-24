import React, { Component } from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';



class Welcome extends Component {

  render() {
    return (
      <div>
        <Header 
          title="Welcome to Giphy"
          subtitle="Saga"
          previous="Favorites"
          next="Search"
        />
      </div>
    );
  }
  
}

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Welcome);