import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import Header from '../Header/Header';

class Favorite extends Component {
  state = {
    value: "",
    valueArray: ["init", "data", "2001"],
  };
  componentDidMount() {
    this.getFavorite();
    this.getCategory();
  }

  getCategory = () => {
    this.props.dispatch({ type: "FETCH_CATEGORY" });
  };
  getFavorite = () => {
    this.props.dispatch({ type: "FETCH_FAVORITE" });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div>
        <Header 
        title="Favorites" 
        subtitle="Saga" 
        previous="Search" 
        next="Home" 
        />

        {/* <h1>Hello from favorite</h1>
        Stringified data from favoriteReducer is:
        <br />
        <br />
        {JSON.stringify(this.props.reduxState.favoriteReducer)}
        <br />
        <br />
        Stringified data from categoryReducer is:
        <br />
        <br />
        {JSON.stringify(this.props.reduxState.categoryReducer)} */}
        {/* <ul> */}
          {this.props.reduxState.favoriteReducer.map((x, key) => {
            return (
              <div className='imageContainer'>
                <FavoriteItem thisItem={x} />
              </div>
            );
          })}
        {/* </ul> */}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Favorite);
