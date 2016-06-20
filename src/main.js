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
/*COMPONENTS*/
import Hello from './components/hello.js';
import App from './components/app';

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
  <Route path="/" component={Hello} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>{routes}</Router>, 
	</Provider>,
	document.getElementById('hello'));