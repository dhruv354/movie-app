//pankage imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//file imports
import './index.css';
import App from './App';
import movies from './reducers'
import rootReducer from './reducers';


const store = createStore(rootReducer)
// console.log('store', store);

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Hello'}]
// })

// console.log('After State', store.getState());
// console.log(typeof(store.getState().movies));

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


