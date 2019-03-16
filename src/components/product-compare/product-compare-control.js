import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductCompareView from './product-compare-view';
import querystring from 'query-string';
import axios from 'axios';

class ProductCompareControl extends React.Component {
  constructor(props) {
    let colorSequence = {"0": "#ef9a9a", "1": "#ef5350", "2": "#d32f2f", "3": "#b71c1c", "4": "#4e342e", "5": "black"};
    super(props);
    console.log("MY PROPS: ", props);
    this.state = {
      result: this.props.result,
      colorSequence: colorSequence
    };
  }

  render() {
    if (this.state.result === null) {
      return null
    }
    return (
      <ProductCompareView
        result={this.state.result}
      />
    );
  }
}

export default withRouter(ProductCompareControl);
