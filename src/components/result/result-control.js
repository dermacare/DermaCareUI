import React from 'react';
import { withRouter } from 'react-router-dom';
import ResultView from './result-view';
import querystring from 'query-string';
import mock, {eventsMock} from '../../model/results';
import axios from 'axios';

class ResultControl extends React.Component {
  constructor(props) {
    super(props);
    let search = querystring.parse(this.props.location.search);
    this.state = {
      query: search.query,
      category: this.props.match.params.category,
      results: [],
      selectedResult: null
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onResultSelect = this.onResultSelect.bind(this);
    this.retrieveSearchResults = this.retrieveSearchResults.bind(this);
  }

  async componentDidMount(){
    await this.retrieveSearchResults(this.state.category, this.state.query);
  }

  retrieveSearchResults(category, query){
    axios.get(`http://dermacare.eastus.cloudapp.azure.com:3000/api/products?query=${query}`)
      .then(({ data }) => {
        this.setState({results: data});
      })
      .catch(error => {
        console.log(error);
      })
  }

  retrieveProduct(result){
    axios.get(`http://dermacare.eastus.cloudapp.azure.com:3000/api/products/${result._id}`)
      .then(({ data }) => {
        this.setState({selectedResult: data});
        console.log("axios: "+ JSON.stringify(data));
      })
      .catch(error => {
        console.log(error);
      })
  }

  onSearchSubmit(query) {
    this.retrieveSearchResults(this.props.match.params.category, query);
    this.props.history.push({
      pathname: `/search/${this.props.match.params.category}`,
      search: '?query=' + encodeURI(query)
    });
  }

  async onResultSelect(result) {
    await this.retrieveProduct(result);
    this.props.history.push({
      pathname: `/search/${this.props.match.params.category}/results/${result._id}`
    })
  }

  render() {
    return (
      <ResultView
        query={this.state.query}
        category={this.state.category}
        onSearch={this.onSearchSubmit}
        onResultSelect={this.onResultSelect}
        results={this.state.results}
        selectedResult={this.state.selectedResult}
        forceRefresh={true}
      />
    );
  }
}

export default withRouter(ResultControl);
