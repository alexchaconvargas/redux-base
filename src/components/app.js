import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
  render() {
    return (<div>
		<AppBar
		    title="Título"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		  />
    	{this.props.children}</div>);
  }
}