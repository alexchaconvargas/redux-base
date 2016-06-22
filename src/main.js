/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
/*REDUX*/
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './sagas'
import reducer from './reducer';
/*MATERIAL_UI*/
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
/*ROUTES*/
import Home from './views/home/home.js';
import Ofertas from './views/ofertas/ofertas.js';
import Empresa from './views/empresa/empresa.js';
import Candidatos from './views/candidatos/candidatos.js';
import App from './app';

injectTapEventPlugin();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
store.dispatch({
  type: 'SET_STATE',
  state: {
    menuItems: ['Home', 'AboutUs'],
    candidates: [
    			{'key' : 1 , 'name': 'Alfredo', 'apellido1': 'Santín', 'email' : 'alfredo@gmail.com'},
    			{'key' : 2 ,'name': 'Pedro', 'apellido1': 'Comí', 'email' : 'pedro@gmail.com'},
    			{'key' : 3 ,'name': 'Jose', 'apellido1': 'Roca', 'email' : 'jose@gmail.com'}]
	}
});

const routes = <Route component={App}>
  <Route path="/" component={Home} />
  <Route path="/empresa" component={Empresa} />
  <Route path="/candidatos" component={Candidatos} />
  <Route path="/ofertas" component={Ofertas} />
</Route>;

ReactDOM.render(
	<Provider store={store}>		
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<Router history={hashHistory}>{routes}</Router>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('hello'));