import React, { Component } from 'react';

class Counter extends Component {
	state = { value: 0 };

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};
	handleDecrement = () => {
		this.setState({ value: this.state.value - 1 });
	};
	render() {
		return (
			<div>
				<button onClick={this.handleDecrement}>-</button>
				<span>{this.state.value}</span>
				<button onClick={this.handleIncrement}>+</button>
			</div>
		);
	}
}

export default Counter;
