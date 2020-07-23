import React, { Component } from "react";
import { connect } from "react-redux";

class Favorites extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Favorites</h1>
        {JSON.stringify(this.props.reduxState.favoriteReducer)}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Favorites);
