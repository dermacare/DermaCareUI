import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import querystring from 'query-string';
import HeaderView from '../result/header-view';
import ListView from '../result/list-view';

class FavoritesControl extends React.Component {
  constructor(props) {
    super(props);
    let search = querystring.parse(this.props.location.search);
    console.log(JSON.stringify(this.props))
    this.state = {
      query: search.query,
      results: [],
      selectedResult: null,
      errorMsg: ''
    };
    this.retrieveFavorites = this.retrieveFavorites.bind(this);
    this.onResultSelect = this.onResultSelect.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  };

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

  async onResultSelect(event, result) {
    event.preventDefault();

    await this.retrieveProduct(result);
    this.props.history.push({
      pathname: `/search/${this.props.match.params.category}/results/${result._id}`
    })
  }

  async componentDidMount(){
    await this.retrieveFavorites();
  }

  retrieveFavorites(category, query){
    fetch('http://dermacare.eastus.cloudapp.azure.com:3000/api/profile/favorites', {'headers': {'token': localStorage.getItem('token')}})
      .then(response => {
          return response.json()
      })
      .then(json => {
        if ('error' in json) {
          this.setState({errorMsg: json.error})
        } else {
          this.setState({results: json});
        }
      })
  }

  onRemove(e, res){
    e.preventDefault();
    e.stopPropagation();
    fetch(`http://dermacare.eastus.cloudapp.azure.com:3000/api/profile/favorites/${res._id}`, {
        method: 'DELETE',
        'headers': {'token': localStorage.getItem('token')}
    })
      .then(response => {
          if (response.status === 204) {
            var list = this.state.results;
            list.splice(list.indexOf(res), 1);
            this.setState({results: list})
            if (this.state.results.length == 0) {
              this.setState({errorMsg: 'No products in the list'})
            }
      }
          return response.json()
      })
      .then(json => {
        if ('error' in json) {
          this.setState({errorMsg: json.error})
        } else {
          this.setState({results: json});
        }
      })
  }

  onSearchSubmit(query) {
    this.retrieveSearchResults(this.props.match.params.category, query);
    this.props.history.push({
      pathname: `/search/${this.props.match.params.category}`,
      search: '?query=' + encodeURI(query)
    });
  }

  render() {
    return (
      <div>
        <HeaderView
          searchQuery={this.state.search}
          onSearchBarFocus={this.onHeaderSearchBarFocus}
          onSearchSubmit={this.onSearchSubmit}
        />
        {this.state.errorMsg !== ''
          ? (<font color="red">{this.state.errorMsg}</font>) : (<p/>)}
        <ListView results={this.state.results} onResultSelect={this.onResultSelect} showRemove={true} onRemove={this.onRemove} />
      </div>
    );
  }
}

export default withRouter(FavoritesControl);
