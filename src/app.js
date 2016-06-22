import React from 'react';
import AppBar from 'material-ui/AppBar';
import Header from './views/header/header.js';

export default class App extends React.Component {
  render() {
    return (<div>
    	<Header />
    	{this.props.children}
    	</div>);
  }
}