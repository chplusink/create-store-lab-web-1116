import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'

import App from './App'
import manageBand from './reducers/manageBand'

// we wrap store in a function for testing purposes
export function configureStore(){
  return createStore(manageBand)
}

const store = configureStore()
store.dispatch({type: 'ROLLOUT'})

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
