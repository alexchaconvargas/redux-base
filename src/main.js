//import Hello from './components/hello.js';

import React from 'react';
import ReactDOM from 'react-dom';
 
import {Router, Route, hashHistory} from 'react-router';

export default class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));