import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';
import FavoritesControl from './profile/favorites-control';
import ComparisonControl from './profile/comparison-control';
import ProfileControl from './profile/profile-control';
import theme from './theme';
import styled from 'styled-components';
import {specials} from '../model/categories';
import Typography from '@material-ui/core/Typography';

const beaverOrange = "#3db31e";

const StyledQuickLinks = styled.div`
  position: relative;
  text-align: center;
`

const SpecialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  border: 1px solid ${beaverOrange};
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  position: relative;
  font-family: sans-serif;
  font-size: 16px;
`
const LinkBagTitle = styled.span`
  position: absolute;
  top: -10px;
  left: 5px;
  background: #fff;
  color: ${beaverOrange};
`

const MyLinks = ({SpecialLinks}) => (
  <SpecialLinks>
    <LinkBagTitle>Quick links to our best products!</LinkBagTitle>
    {specialLinks.map((e, key)=>{
      return (
        <Special key={key} href={`/search?query=${e.query}`}>
          {e.name}
        </Special>
      )
    })}
  </SpecialLinks>
)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: ''
    };

    this.callApi = this.callApi.bind(this);
  }

  async componentDidMount() {
    try {
      let res = await this.callApi();
      this.setState({ response: res.express });
    } catch (e) {
      console.log(e);
    }
  }

  async callApi() {
    const response = await fetch('http://dermacare.eastus.cloudapp.azure.com:3000/home');
    const body = await response.json();
    console.log("This is my response: ", response);
    console.log("This is my body: ", body)

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <ProfileControl {...props} />
                  <Logo />
                  <SearchControl {...props} />
                </React.Fragment>
              )}
            />
            <Route path="/search/:category" render={props => <ResultControl {...props} />} />
            <Route path="/favorites" render={props => <FavoritesControl {...props} />} />
            <Route path="/comparison" render={props => <ComparisonControl {...props} />} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
