import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Auth from './components/auth/auth';
import Home from './components/home';
import './app.scss';

class App extends Component {
	state = {
		isAuthenticated: false,
	};
	handleSignInSuccess = res => {
		this.setState({ isAuthenticated: true });
	};
	handleSignUpSuccess = res => {
		this.props.history.push('/auth/signin');
	};
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact>
						{this.state.isAuthenticated ? <Home /> : <Redirect to="/auth" />}
					</Route>
					<Route path="/auth">
						{this.state.isAuthenticated ? (
							<Redirect to="/" />
						) : (
							<Auth
								onSignInSuccess={this.handleSignInSuccess}
								onSignUpSuccess={this.handleSignUpSuccess}
							/>
						)}
					</Route>
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
