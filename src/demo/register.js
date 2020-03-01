import React, { Component } from 'react';

export default class Register extends Component {
	state = {
		firstName: '',
		lastName: ''
	};
	handleChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<form>
				<fieldset>
					<legend>General</legend>
					<div>
						<label>First Name</label>
						<input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
					</div>
					<div>
						<label>Last Name</label>
						<input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
					</div>
				</fieldset>
			</form>
		);
	}
}
