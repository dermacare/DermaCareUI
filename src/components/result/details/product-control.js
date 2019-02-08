import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductView from './product-view';
import querystring from 'query-string';
import axios from 'axios';

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultId: this.props.match.params.id,
      result: null,
    };
    this.retrieveSearchResults = this.retrieveSearchResults.bind(this);
  }

  async componentDidMount(){
    await this.retrieveSearchResults(this.state.result);
  }

  retrieveSearchResults(result){
    axios.get(`http://dermacare.eastus.cloudapp.azure.com:3000/api/products/${this.state.resultId}`)
      .then(({ data }) => {
        this.setState({result: data});
        //console.log("axios: "+ JSON.stringify(data));
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    if (this.state.result === null) {
      return null
    }
    return (
      <ProductView
        result={this.state.result}
      />
    );
  }
}

export default withRouter(ProductControl);
