import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timer.scss';

const status = {
	RUNNING: 0,
	TIMEOUT: 1,
	DONE: 2,
};

class Timer extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		seconds: PropTypes.number,
		options: PropTypes.shape({
			snoozeLabel: PropTypes.string.isRequired,
			dismissLabel: PropTypes.string.isRequired,
		}),
	};

	static defaultProps = {
		seconds: 6,
		options: {
			snoozeLabel: '5 mins mas pls',
			dismissLabel: 'Terminar',
		},
	};

	intervalRef = React.createRef();
	handleSnooze = () => {
		this.setState({ value: 5, status: status.RUNNING }, () => {
			this.start();
		});
	};
	handleDismiss = () => {
		this.setState({ status: status.DONE });
	};

	constructor(props) {
		super(props);
		this.state = {
			value: props.seconds,
			status: status.RUNNING,
		};
	}
	componentDidMount() {
		this.start();
	}
	componentWillUnmount() {
		this.clearIntervalRef();
	}
	clearIntervalRef() {
		if (this.intervalRef.current) {
			clearInterval(this.intervalRef.current);
			this.intervalRef.current = null;
		}
	}
	start() {
		this.intervalRef.current = setInterval(() => {
			const nextValue = this.state.value - 1;
			let nextStatus = this.state.status;
			if (nextValue <= 0) {
				this.clearIntervalRef();
				nextStatus = status.TIMEOUT;
			}
			this.setState({ value: nextValue, status: nextStatus });
		}, 1000);
	}
	getSnapshot() {
		switch (this.state.status) {
			case status.RUNNING:
				return this.state.value;
			case status.TIMEOUT:
				return (
					<div>
						<span>{this.props.name}</span>
						<button onClick={this.handleSnooze}>{this.props.options.snoozeLabel}</button>
						<button onClick={this.handleDismiss}>{this.props.options.dismissLabel}</button>
					</div>
				);
			case status.DONE:
				return '--';
		}
	}
	render() {
		return <div className="timer">{this.getSnapshot()}</div>;
	}
}

export default Timer;
