import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SearchControl from './search/search-control';
import Logo from './logo';
import ResultControl from './result/result-control';
import theme from './theme';
import styled from 'styled-components';
import {specials} from '../model/categories';
import Typography from '@material-ui/core/Typography';

const beaverOrange = "#DC4405";

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

const QuickLinks = ({SpecialLinks}) => (
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
									<SpecialLinks specialLinks = {specials}/>
								</React.Fragment>
							)}
						/>
						<Route path="/search/:category" render={props => <ResultControl {...props} />} />
					</Switch>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;
