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
        <ul>
          {this.props.reduxState.favoriteReducer.map((x, key) => {
            return <li key={key}><img src={x.url}></img></li>
          })}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Favorite);
