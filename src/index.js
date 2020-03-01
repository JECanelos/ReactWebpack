import React from 'react';
import ReactDOM from 'react-dom';
import AppDemoHooks from './app-demo-hooks';
// import { HashRouter as Router } from 'react-router-dom';
// import App from './app';

// const app = React.createElement(App, null);
const root = document.getElementById('root');


// ReactDOM.render(app, root);
// ReactDOM.render(
	// 	<Router>
	// 		<App />
	// 	</Router>,
	// 	root
	// );
	
ReactDOM.render(<AppDemoHooks />, root);

// function component() {
// 	const el = document.createElement('h1');
// 	el.innerText = 'Webpack Demo';
// 	return el;
// }

// function dep(id) {
// 	const deps = ['webpack', 'babel'];
// 	const dep = deps.find(dep => dep === id);
// 	const el = document.createElement('p');
// 	el.innerText = (dep) ? dep : `${id} not found`;
// 	return el;
// }

// function render() {
// 	const root = document.getElementById('root');
// 	const el = component();
// 	const d1 = dep('webpack');
// 	const d2 = dep('lodash');
// 	root.appendChild(el);
// 	root.appendChild(d1);
// 	root.appendChild(d2);
// }

// window.addEventListener('DOMContentLoaded', function() {
// 	render();
// });
