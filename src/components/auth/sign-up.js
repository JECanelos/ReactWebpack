import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Panel, { PanelHeader, PanelBody, PanelFooter } from '../ui/panel';
import Field from '../ui/field';
import Input from '../ui/input';
import axios from 'axios';

const URL = 'http://172.17.0.59:1337/auth/local/register';

export default class SignUp extends Component {
	state = {
		hasError: false,
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		password2: '',
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
			console.log(error);
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
		const { firstName, lastName, email, username, password, password2 } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Panel className="custom-panel">
						<PanelHeader>
							<h2>Sign Up</h2>
						</PanelHeader>
						<PanelBody>
							{this.renderInput({
								id: 'sign-up_firstname',
								name: 'firstName',
								value: firstName,
								label: 'First Name',
								classes: 'custom-input',
							})}
							{this.renderInput({
								id: 'sign-up_lastname',
								name: 'lastName',
								value: lastName,
								label: 'Last Name',
							})}
							{this.renderInput({
								id: 'sign-up_email',
								name: 'email',
								value: email,
								label: 'Email',
								type: 'email',
							})}
							{this.renderInput({
								id: 'sign-up_username',
								name: 'username',
								value: username,
								label: 'Username',
							})}
							{this.renderInput({
								id: 'sign-up_password',
								name: 'password',
								value: password,
								label: 'Password',
								type: 'password',
							})}
							{this.renderInput({
								id: 'sign-up_password2',
								name: 'password2',
								value: password2,
								label: 'Confirm Password',
								type: 'password',
							})}
						</PanelBody>
						<PanelFooter>
							<button type="submit">Sign Up</button>
							<Link to={this.props.signInPath}>Sign In</Link>
						</PanelFooter>
					</Panel>
				</form>
			</div>
		);
	}
}
