import React from 'react';
import './field.scss';

export default function Field(props) {
	const { id, label, children } = props;
	return (
		<div className="field">
			<label className="field__label" htmlFor={id}>
				{label}
			</label>
			{children}
		</div>
	);
}
