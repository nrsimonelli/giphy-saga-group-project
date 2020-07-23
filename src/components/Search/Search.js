import React, { Component } from 'react';
import { connect } from 'react-redux';

const putReduxStateToProps = reduxState => ({
  reduxState
});

class Search extends Component {


    
  state = {
    searchQuery: '',
    wasClicked: false
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
    console.log("TESTING:",this.props.reduxState.searchReducer);
    this.setState({ 
      wasClicked: true
    })
  }

  render() {
    const wasClicked = this.state.wasClicked
    return (
        
      <div>
        <h1>Hello from search</h1>
        <input name="search" type="text" value={this.state.searchQuery} 
        onChange={this.handleSearchQuery}/>
        <button onClick={this.handleSearchSubmit}>Search</button>
        <div id="results">
          {/* {JSON.stringify(this.props.reduxState.searchReducer)} */}
         {wasClicked
         ? 
         this.props.reduxState.searchReducer.map((item, index)=>{
            return ( <div> <img src={item.images.original.url}></img>{item.images.original.url}</div> )})
         : 
         'false'}
          
        </div>
      </div>
      
    );
  }
  
}



export default connect(putReduxStateToProps)(Search);