import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const App = ({nextKey, dispatch}) => {
  return (
    <div tabIndex={0} onKeyPress={(e) => dispatch({type: "KEY_PRESS", charCode: e.charCode})} className="App">
      <h1>{String.fromCharCode(nextKey)}</h1>
    </div>
  );
}

export default connect(s => s)(App);
