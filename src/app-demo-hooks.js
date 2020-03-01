import React from 'react';
import Counter from './demo-hooks/counter';
import DateField from './demo-hooks/date-field';
import Timer from './demo-hooks/timer';

function AppDemoHooks() {
	return (
		<div>
			<Counter />
			<DateField />
			<Timer name="Alert" />
		</div>
	);
}

export default AppDemoHooks;
