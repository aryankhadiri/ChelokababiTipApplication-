/**
 * This JavaScript file acts as an "outside" place to render the main/wrapper App Component, rather than rendering it 
 * in the App.js file itself.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); 