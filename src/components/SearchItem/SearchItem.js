import React, { Component } from 'react';
import { connect } from 'react-redux';





class SearchItem extends Component {

  onFavorite = () => {
    console.log('you clicked me!');
    this.props.dispatch({
      type: 'ADD_FAVORITE',
      payload: this.props.thisItem
    })
    console.log(this.props.thisItem);
    alert('Favorite Added!');
  }


  render() {
    return (
      <div>
        <img className="searchImage" onClick={this.onFavorite} src={this.props.thisItem.images.original.url} />
      </div>
    );
  }
  
}


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(SearchItem);
