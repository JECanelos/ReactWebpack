import React from 'react';
import classnames from 'classnames';
import './input.scss';

export default function Input(props) {
	const { className, ...rest } = props;
	const classes = classnames('input', { [className]: !!className });
	return <input className={classes} {...rest} />;
}
