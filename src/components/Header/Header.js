import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'



class Header extends Component {

  previousClicked = () => {
    console.log('previous path was clicked');
    // Takes you to new page
    this.props.history.push(`/${this.props.previous}`)
  }
  nextClicked = () => {
    console.log('next path was clicked');
    // Takes you to new page
    this.props.history.push(`/${this.props.next}`)
  }

  render() {
    return (
      <div className='header'>
        <p className='title'>{this.props.title}</p>
        <p className='subtitle'>{this.props.subtitle}</p>
        <div className='navigation'>
          <button onClick={this.previousClicked}>{this.props.previous}</button>
          <span className='pipe'>|</span>
          <button onClick={this.nextClicked}>{this.props.next}</button>
        </div>
        
      </div>
    );
  }
  
}

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Header));
