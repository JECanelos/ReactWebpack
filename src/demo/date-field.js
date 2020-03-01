import React, { Component } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

class DateField extends Component {
	el = React.createRef();
	componentDidMount() {
		const node = this.el.current;
		if (node) flatpickr(node, {});
	}
	render() {
		return <input ref={this.el} />;
	}
}

export default DateField;
