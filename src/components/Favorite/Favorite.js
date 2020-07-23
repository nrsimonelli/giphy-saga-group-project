import React, { Component } from "react";
import { connect } from "react-redux";

class Favorite extends Component {
  state = {
    value: "",
    valueArray: ["init", "data", "2001"],
  };
  componentDidMount() {
    this.getFavorite();
    this.getCategory();
    this.createValueArray();
  }
  createValueArray = () => {
    console.log(
      "in createValueArray. this.state.valueArray is",
      this.state.valueArray
    );
    console.log(this.props.reduxState.categoryReducer.length);
    for (let i = 0; i < this.props.reduxState.categoryReducer.length; i++) {
      this.setState({
        valueArray: this.props.reduxState.categoryReducer[i]
      });
      console.log("In for loop: this.state.valueArray is ", this.state.valueArray);
    }
  };
  getCategory = () => {
    this.props.dispatch({ type: "FETCH_CATEGORY" });
  };
  getFavorite = () => {
    this.props.dispatch({ type: "FETCH_FAVORITE" });
  };
  handleChange = (event) => {
    const target = event.target;
    //const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Hello from favorite</h1>
        Stringified data from favoriteReducer is:
        <br />
        <br />
        {JSON.stringify(this.props.reduxState.favoriteReducer)}
        <br />
        Stringified data from categoryReducer is:
        <br />
        <br />
        {JSON.stringify(this.props.reduxState.categoryReducer)}
        <ul>
          {this.props.reduxState.favoriteReducer.map((x, key) => {
            return (
              <>
                <li key={key}>
                  <img src={x.url} alt={x.name}></img>
                </li>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Select a category for this gif:
                    <select
                      multiple={true}
                      value={["him","her"]}
                      onChange={this.handleChange}
                      name={x.id}
                    ></select>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </>
            );
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
