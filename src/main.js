import Hello from './components/hello.js';
import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
 
import {Router, Route, hashHistory} from 'react-router';

const routes = <Route component={App}>
  <Route path="/" component={Hello} />
</Route>;

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>, 
	document.getElementById('hello'));