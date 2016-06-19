//import Hello from './hello.js';

import React from 'react';
import ReactDOM from 'react-dom';
 
import {Router, Route, hashHistory} from 'react-router';

const routes = <Route component={App}>
  <Route path="/" component={Home} />
  <Route path="/vacancyManager" component={VacancyManagerContainer} />
</Route>;

ReactDOM.render(<Hello/>, document.getElementById('hello'));