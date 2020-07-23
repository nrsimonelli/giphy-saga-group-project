import React, { Component } from 'react';
import { connect } from 'react-redux';

const putReduxStateToProps = reduxState => ({
  reduxState
});

class Search extends Component {


    
  state = {
    searchQuery: ''
  }

  handleSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
    console.log('in input:', event.target.value);
  }

  handleSearchSubmit = () => {
    console.log('Clicked search button');
    this.props.dispatch({
        type: 'FETCH_QUERY_RESULT',
        payload: this.state.searchQuery
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from search</h1>
        <input name="search" type="text" value={this.state.searchQuery} 
        onChange={this.handleSearchQuery}/>
        <button onClick={this.handleSearchSubmit}>Search</button>
      </div>
    );
  }
  
}



export default connect(putReduxStateToProps)(Search);