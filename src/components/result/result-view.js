import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import styles from './result-styles';
import eventsUtil from '../../util/events';
import HeaderView from './header-view';
import ListView from './list-view';
import ProductView from './details/product-view'

/**
 * Represents the main view for listing search results and their associated details after a user has entered a search
 * query.
 */
class ResultView extends React.Component {
	constructor(props) {
		super(props);

		this.state = { search: this.props.query };

		this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onResultSelect = this.onResultSelect.bind(this);
	}

	/**
	 * Updates the internal state of the search query whenever a user modifies the value in the search bar of the
	 * header.
	 * @param {object} event the user event detected by the browser
	 */
	onSearchQueryChange(event) {
		this.setState({ search: event.target.value });
	}

	/**
	 * Invokes the callback passed from the parent, passing along the search query typed into the search bar and
	 * preventing the event from bubbling up the DOM.
	 * @param {object} event the user event detected by the browser
	 */
	onSearchSubmit(event) {
		eventsUtil.stop(event);
		this.props.onSearch(this.state.search);
	}

	/**
	 * Selects all the text in the search bar when it comes into focus.
	 * @param {object} event the focus event detected by the browser
	 */
	onHeaderSearchBarFocus(event){
		event.target.select();
	}

	/**
	 * Invokes the callback passed from the parent for responding to a selected item in the list of the results. This
	 * function passes along the id of the selected result. It also prevents the event from bubbling up the DOM.
	 * @param {object} event the user event detected by the browser
	 * @param {number} id the id of the result item selected from the list
	 */
	onResultSelect(event, id) {
		eventsUtil.stop(event);
		this.props.onResultSelect(id);
	}

	render() {
		const { classes, results, selectedResult } = this.props;
		return (
			<div className={classes.root}>
				<HeaderView
					onSearchQueryChange={this.onSearchQueryChange}
					searchQuery={this.state.search}
					onSearchBarFocus={this.onHeaderSearchBarFocus}
					onSearchSubmit={this.onSearchSubmit}
				/>
				<Switch>
					<Route
						exact
						path="/search/:category"
						render = {
							props => {
								let category = props.match.params.category || "";
									return <ListView {...props} results={results} onResultSelect={this.onResultSelect} />
							}
						}
					/>
					<Route
						exact
						path="/search/:category/results/:id"
						render={props => {
								return <ProductView result={selectedResult} {...props} />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

ResultView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultView);