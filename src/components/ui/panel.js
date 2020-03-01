import React from 'react';
import classnames from 'classnames';
import './panel.scss';

export default function Panel(props) {
	const { className } = props;
	const classes = classnames('panel', { [className]: !!className });
	return <div className={classes}>{props.children}</div>;
}

export function PanelHeader(props) {
	return <div className="panel__header">{props.children}</div>;
}

export function PanelBody(props) {
	return <div className="panel__body">{props.children}</div>;
}

export function PanelFooter(props) {
	return <div className="panel__footer">{props.children}</div>;
}
