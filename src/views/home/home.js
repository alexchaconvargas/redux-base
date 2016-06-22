import React from 'react';
import CoolButton from '../../components/button/button'
import layout from './home.css'

export default class Home extends React.Component {
  render() {
    return (
        <div>
        	<div className={layout.global}>
        	<img className={layout.brand} src="/img/dixit.png" />
        	<h1> Ofertas de empleo del sector de la Distribución </h1>
            </div>
            <div className={layout.cardContainer}>
                <div className={layout.cardDiv}>
                    <a href="/#/empresa">
                    <h3 className={layout.cardText}>Acceso Empresas</h3>
                    <img className={layout.cardImg} src="/img/empresa.jpg" />
                    </a>
                </div>
                <div className={layout.cardDiv}>
                    <a href="/#/candidatos">
                    <h3 className={layout.cardText}>Acceso Candidatos</h3>
                    <img className={layout.cardImg} src="/img/empleado.jpg" />
                    </a>
                </div>
                <div className={layout.cardDiv}>
                    <a href="/#/ofertas">
                        <h3 className={layout.cardText}>Ofertas de empleo</h3>
                        <img className={layout.cardImg} src="/img/ofertas.jpg" />
                    </a>
                </div>
            </div>
    	</div>
    	);
  }
}