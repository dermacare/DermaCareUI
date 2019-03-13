import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductComparisonView from './product-comparison-view';
import querystring from 'query-string';
import axios from 'axios';

class ProductComparisonControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultId: this.props.match.params.id,
      result: null,
    };
    this.retrieveComparisonResults = this.retrieveComparisonResults.bind(this);
    this.addToCompareList = this.addToCompareList.bind(this);
    this.addToFavoriteList = this.addToFavoriteList.bind(this);
  }

  async componentDidMount(){
    await this.retrieveComparisonResults(this.state.result);
  }

  async retrieveComparisonResults(){
    axios.get(`http://dermacare.eastus.cloudapp.azure.com:3000/api/profile/comparison/compare/`)
      .then(({ data }) => {
        this.setState({ result: data });
        console.log("axios: "+ JSON.stringify(data));
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
      <ProductComparisonView
        result={this.state.result}
      />
    );
  }
}

export default withRouter(ProductComparisonControl);
