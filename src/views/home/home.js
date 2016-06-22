import React from 'react';
import CoolButton from '../../components/button/button'
import layout from './home.css'

export default class Home extends React.Component {
  render() {
    return (
        <div>
    	<div className={layout.global}>
        	<img className={layout.brand} src="/img/logo.png" />
            <h2 className={layout.logo}>Dixtri Jobs</h2>
        	<CoolButton text='Acceso empresas'  />
            <CoolButton text='Ofertas de empleo' />
            <CoolButton text='Acceso candidatos' />
        </div>
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