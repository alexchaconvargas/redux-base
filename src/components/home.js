import React from 'react';
import CoolButton from './button/button'

export default class Home extends React.Component {
  render() {
    return (
    	<div>
    	<img src="/img/logo.png" />
    	<h1> Dixtri Jobs </h1>
    	<CoolButton text='A super cool button' />
    	</div>
    	);
  }
}