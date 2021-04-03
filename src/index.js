//pankage imports
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

//file imports
import './index.css';
import App from './App';
import movies from './reducers'
import rootReducer from './reducers';


//redux middleware
//redux will call this function like logger(obj)(next)(action)
//i.e. the concept of currying 
// const logger = ({dispatch, getState}) => {
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION TYPE = ', action.type);
//       next(action)
//     }
//   }
// }

//above code can be modified like this.
const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log('ACTION TYPE: ', action.type);
  next(action)
}

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


