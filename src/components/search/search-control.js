import React from 'react';
import SearchView from './search-view';
import { withRouter } from 'react-router-dom';
import categories from '../../model/categories';

class SearchControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			category: 'all'
		};

		this.onSearch = this.onSearch.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onCategoryChange = this.onCategoryChange.bind(this);
	}

	onSearch(event) {
		this.props.history.push({
			pathname: '/search/' + this.state.category,
			search: '?query=' + this.state.query
		});
	}

	onChange(event) {
		this.setState({ query: event.target.value });
	}

	onCategoryChange(event) {
		this.setState({ category: event.target.value });
	}

	render() {
		return (
			<SearchView
				categories={categories}
				category={this.state.category}
				onSearch={this.onSearch}
				onCategoryChange={this.onCategoryChange}
				onChange={this.onChange}
			/>
		);
	}
}

export default withRouter(SearchControl);
