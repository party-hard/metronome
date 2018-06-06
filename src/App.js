import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


import Worker from './worker/main.worker';
import presetsListStore from './stores/presets-list-store';
import Layout from './components/Layout';


const App = () => {
  return (
    <div className="App">
      <header>
        <div className="container">
          Metronome
        </div>
      </header>
      <Layout/>
      <footer>
        <div className="container">
          Metronome
        </div>
      </footer>
    </div>
  );
};
export default App;

ReactDOM.render(
  <Provider store={presetsListStore}>
    <App />
  </Provider>, document.getElementById("content"));
