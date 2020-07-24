import React, { Component } from "react";
import { connect } from "react-redux";

class FavoriteItem extends Component {
  state = {
    value: 0,
    passedCategory: this.props.thisItem.category,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(
      "in FavoriteItem handleChange. event.target.value is:",
      event.target.value
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log("in handleSubmit. this.state.value is:", this.state.value);
    // this.state.value is the submitted category
    // it is blank at first... do something about that
    this.props.dispatch({
      type: "CHANGE_CATEGORY",
      payload: {
        category: Number(this.state.value),
        id: this.props.thisItem.id,
      },
    }); // this should send category id... not string
  };

  render() {
    return (
      <div>
        <br />
        {/* I am a FavoriteItem and my props is:
        <br />
        {JSON.stringify(this.props)} */}
        <img src={this.props.thisItem.url} alt={this.props.thisItem.name} />
        <br />
        {/* below drawn from tutorial at: https://reactjs.org/docs/forms.html */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select
              value={this.state.passedCategory}
              onChange={this.handleChange}
            >
              {this.props.reduxState.categoryReducer.map((x, key) => (
                <option value={x.id} key={key}>
                  {x.name}
                </option> // problem might be here
              ))}
              {/* old <option> stuff from tutorial */}
              {/* <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(FavoriteItem);
