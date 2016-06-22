import React from 'react';
import CoolButton from '../../components/button/button'
import layout from './home.css'

export default class Home extends React.Component {
  render() {
    return (
    	<div className={layout.global}>
    	<img src="/img/logo.png" />
    	<h1> Dixtri Jobs </h1>
    	<CoolButton text='A super cool button' />
    	<ul>TODO - LIST
		  <li>Basic CSS layout</li>
		  <li>Testing</li>
		  <li>Basic navigation</li>
		  <li>Action example </li>
		  <li>Saga example </li>
		</ul>
    	</div>
    	);
  }
}