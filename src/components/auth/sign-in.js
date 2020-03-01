import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Panel, { PanelHeader, PanelBody, PanelFooter } from '../ui/panel';
import Field from '../ui/field';
import Input from '../ui/input';
import axios from 'axios';

const URL = 'http://172.17.0.59:1337/auth/local';

export class SignIn extends Component {
	state = {
		hasError: false,
		identifier: '',
		password: '',
	};
	handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		try {
			const res = await axios.post(URL, this.state);
			this.props.onSuccess(res);
		} catch (error) {
			console.error(error);
			this.setState({ hasError: true });
		}
	};
	renderInput({ id, name, value, label, type, classes }) {
		return (
			<Field id={id} label={label}>
				<Input
					id={id}
					name={name}
					value={value}
					onChange={this.handleChange}
					type={type}
					className={classes}
					required
				/>
			</Field>
		);
	}
	render() {
		const { identifier, password } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Panel className="custom-panel">
						<PanelHeader>
							<h2>Sign In</h2>
						</PanelHeader>
						<PanelBody>
							{this.renderInput({
								id: 'sign-in_username',
								name: 'identifier',
								value: identifier,
								label: 'Email/Username',
							})}
							{this.renderInput({
								id: 'sign-in_password',
								name: 'password',
								value: password,
								label: 'Password',
								type: 'password',
							})}
						</PanelBody>
						<PanelFooter>
							<button type="submit">Sign In</button>
							<Link to={this.props.signUpPath}>Create Account</Link>
						</PanelFooter>
					</Panel>
				</form>
			</div>
		);
	}
}

export default SignIn;
