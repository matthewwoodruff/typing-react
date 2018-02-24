import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const enhancer = composeWithDevTools();

const newKey = (state) => {
  return {
    ...state,
    nextKey: Math.floor(Math.random()*27)+97
  }
};

const keyPress = (state, {charCode}) => {
  return state.nextKey === charCode ? newKey() : { ...state };
}

const reducerMap = {
  "NEW_KEY": newKey,
  "KEY_PRESS": keyPress,
};

const reducer = (state = {}, action) => {
  const mappedReducer = reducerMap[action.type]
  return (mappedReducer && mappedReducer(state, action)) || { ...state }
};
let store = createStore(reducer, enhancer);

store.dispatch({ type: "NEW_KEY"});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
