import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';
import theme from './theme';
import styled from 'styled-components';
import MapContainer from "./cts/map-container";
import {sportCategories} from '../model/categories';

const beaverOrange = "#DC4405";

const StyledQuickLinks = styled.div`
	position: relative;
	text-align: center;
`

const QuickLinks = ()=>(
	<StyledQuickLinks>
		<a href="/search/freefood">free food</a>
		<br />
        <a href="/cts">Corvallis Transport Information</a>
	</StyledQuickLinks>
)

const StyledSportLinks = styled.div`
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

const SportCategory = styled.a`
	display: flex;
	color: ${beaverOrange};
	margin: 0 5px;
	flex-basis: 30%;
	justify-content: center;
`

const LinkBagTitle = styled.span`
	position: absolute;
	top: -10px;
	left: 5px;
	background: #fff;
	color: ${beaverOrange};
`

const SportQuickLinks = ({sportCategories}) => (
	<StyledSportLinks>
		<LinkBagTitle>Sports Quick Links</LinkBagTitle>
		{sportCategories.map((e, key)=>{
			return (
				<SportCategory key={key} href={`/search/sports?query=${e.query}`}>
					{e.name}
				</SportCategory>
			)
		})}
	</StyledSportLinks>
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
		const response = await fetch('http://localhost:8081/home');
		const body = await response.json();

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
									<Logo />
									<SearchControl {...props} />
									<QuickLinks />
									<SportQuickLinks sportCategories = {sportCategories}/>
								</React.Fragment>
							)}
						/>
                        <Route path="/cts" render={props => <MapContainer {...props} />} />
						<Route path="/search/:category" render={props => <ResultControl {...props} />} />
					</Switch>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
