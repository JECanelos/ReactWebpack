import React from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default function DateFieldWithHooks() {
	const el = React.useRef();
	React.useEffect(() => {
		const node = el.current;
		if (node) flatpickr(node, {});
	}, []); //<---- se ejecuta una única vez; cuando el DOM esté listo
	return <input ref={el} />;
}
