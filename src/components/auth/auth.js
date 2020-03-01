import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import SignIn from './sign-in';
import SignUp from './sign-up';
import bgImage from '../../images/background.jpg';
import logoImage from '../../images/react.svg';
import './auth.scss';

function Auth(props) {
	const { path } = props.match;
	const signInPath = `${path}/signin`;
	const signUpPath = `${path}/signup`;
	return (
		<div className="auth" style={{ backgroundImage: `url(${bgImage})` }}>
			<div className="auth__container">
				<img src={logoImage} alt="React" className="auth__logo" />
				<Switch>
					<Route path={path} exact>
						<Redirect to={signInPath} />
					</Route>
					<Route path={signInPath}>
						<SignIn onSuccess={props.onSignInSuccess} signUpPath={signUpPath} />
					</Route>
					<Route path={signUpPath}>
						<SignUp onSuccess={props.onSignUpSuccess} signInPath={signInPath} />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default withRouter(Auth);
