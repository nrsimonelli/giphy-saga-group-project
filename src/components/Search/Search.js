import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import SearchItem from '../SearchItem/SearchItem';

const putReduxStateToProps = (reduxState) => ({
	reduxState
});

class Search extends Component {
	state = {
		searchQuery: '',
		wasClicked: false
	};

	handleSearchQuery = (event) => {
		this.setState({
			searchQuery: event.target.value
		});
		console.log('in input:', event.target.value);
	};

	handleSearchSubmit = () => {
		console.log('Clicked search button');
		this.props.dispatch({
			type: 'FETCH_QUERY_RESULT',
			payload: this.state.searchQuery
		});
		console.log('TESTING:', this.props.reduxState.searchReducer);
		this.setState({
			wasClicked: true
		});
	};

	render() {
		const wasClicked = this.state.wasClicked;
		return (
			<div>
				<Header title="Wild Giphy" subtitle="Saga" previous="Favorites" next="Home" />

				<div className="searchBar">
					<input name="search" type="text" value={this.state.searchQuery} onChange={this.handleSearchQuery} />
					<button onClick={this.handleSearchSubmit}>Search</button>
				</div>

				<div id="results">
					{wasClicked ? (
						this.props.reduxState.searchReducer.map((item, index) => {
							return (
								<div className="imageContainer">
									<SearchItem thisItem={item} />
								</div>
							);
						})
					) : (
						false
					)}
				</div>
			</div>
		);
	}
}

export default connect(putReduxStateToProps)(Search);
