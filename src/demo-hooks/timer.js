import React from 'react';
import PropTypes from 'prop-types';
import './timer.scss';

const TimerStatus = {
	RUNNING: 0,
	TIMEOUT: 1,
	DONE: 2,
};

// reducer.js
function initState(seconds) {
	return { value: seconds, status: TimerStatus.RUNNING };
}

// action: { type: '' payload: any }
function reducer(state, action) {
	switch (action.type) {
		case Types.UPDATE:
			return { status: state.status, value: action.payload };
		case Types.NOTIFY:
			return { status: TimerStatus.TIMEOUT, value: 0 };
		case Types.SNOOZE:
			return { status: TimerStatus.RUNNING, value: action.payload };
		case Types.DISMISS:
			return { status: TimerStatus.DONE, value: 0 };
		default:
			throw Error('action.type not found!!');
	}
}

// types.js
const Types = {
	UPDATE: 'update',
	NOTIFY: 'notify',
	SNOOZE: 'snooze',
	DISMISS: 'dismiss',
};

// actions.js
//////////////////////////////////////////////////////////////////
function update(nextValue) {
	return { type: Types.UPDATE, payload: nextValue };
}
function notify() {
	return { type: Types.NOTIFY };
}
function snooze(value) {
	return { type: Types.SNOOZE, payload: value };
}
function dismiss() {
	return { type: Types.DISMISS };
}
//////////////////////////////////////////////////////////////////

export default function TimerWithHooks(props) {
	const timeoutRef = React.useRef();

	// const [value, setValue] = React.useState(props.seconds);
	// const [status, setStatus] = React.useState(TimerStatus.RUNNING);
	const [{ value, status }, dispatch] = React.useReducer(reducer, props.seconds, initState);

	React.useEffect(() => {
		if (status === TimerStatus.RUNNING) {
			timeoutRef.current = setTimeout(() => {
				const nextValue = value - 1;
				if (nextValue <= 0) {
					dispatch(notify());
				} else {
					dispatch(update(nextValue));
				}
			}, 1000);
		}

		//Clean-up
		return () => {
			clearTimeoutRef();
		};
	}, [value, status]); //<---- se ejecuta cuando el DOM esté listo, cuando value cambia, cuando status cambia

	const handleSnooze = () => {
		dispatch(snooze(3));
	};
	const handleDismiss = () => {
		dispatch(dismiss());
	};
	const clearTimeoutRef = () => {
		if (timeoutRef.current) {
			clearInterval(timeoutRef.current);
			timeoutRef.current = null;
		}
	};
	const renderSnapshot = () => {
		switch (status) {
			case TimerStatus.RUNNING:
				return (
					<div>
						<span>{value}</span>
						<button onClick={handleDismiss}>STOP!</button>
					</div>
				);
			case TimerStatus.TIMEOUT:
				return (
					<div>
						<span>{props.name}</span>
						<button onClick={handleSnooze}>{props.options.snoozeLabel}</button>
						<button onClick={handleDismiss}>{props.options.dismissLabel}</button>
					</div>
				);
			case TimerStatus.DONE:
				return '--';
		}
	};
	return <div className="timer">{renderSnapshot()}</div>;
}

TimerWithHooks.propTypes = {
	name: PropTypes.string.isRequired,
	seconds: PropTypes.number,
	options: PropTypes.shape({
		snoozeLabel: PropTypes.string.isRequired,
		dismissLabel: PropTypes.string.isRequired,
	}),
};

TimerWithHooks.defaultProps = {
	seconds: 6,
	options: {
		snoozeLabel: '5 mins mas pls',
		dismissLabel: 'Terminar',
	},
};
