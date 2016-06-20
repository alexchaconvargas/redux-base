import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	  container: {
	  	backgroundColor: "#00bcd4",
	  	boxSizing: "border-box",
	  	overflow: "hidden",
	  	padding: 24,
	  	paddingTop: 100,
	  	paddingBottom: 48
	  },
	  logo: {
	  	height: 157,
	  	marginLeft: 100.5,
	  	width: 420
	  },
	  title:  { align: "center"
	  			}
	};

export default class Home extends React.Component {
  render() {
    return (
    	<div style={styles.container}>
    	<img src="/img/logo.png" style= {styles.logo}/>
    	<h1 style={styles.title}> Dixtri Jobs </h1>
    	<RaisedButton label="Default" />
    	</div>
    	);
  }
}

//style={padding: 24, boxSizing : "border-box", backgroundColor: "#00bcd4", overflow: "hidden", paddingBottom: 48, paddingTop: 48}