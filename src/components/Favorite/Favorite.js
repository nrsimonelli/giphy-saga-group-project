import React, { Component } from "react";
import { connect } from "react-redux";

class Favorite extends Component {
  componentDidMount(){
    this.getFavorite();
  }

  getFavorite = () => {
    this.props.dispatch({ type: "FETCH_FAVORITE"});
  }
  render() {
    return (
      <div>
        <h1>Hello from favorite</h1>
        {JSON.stringify(this.props.reduxState.favoriteReducer)}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Favorite);
