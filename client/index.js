import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { initialState, gameReducer } from './reducers/gameReducer';
import App from './components/app/App';
import './index.css';

const store = createStore(gameReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
  		<App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);