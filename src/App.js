import React, { Component } from "react";
import ReactDOM from "react-dom";
import './main.css';
import Worker from './worker/main.worker';

import context from './utils/context.js';
import {loadAll, getBuffer} from './components/buffers.js';

import presetStore from './stores/preset-store.js';
import presetsListStore from "./stores/presets-list-store.js";

let unlockContext = () => {
  context.unlock( () => {
      window.removeEventListener('touchstart', unlockContext);
  } );
}; 

class Wrapper extends React.Component {

  async componentDidMount () {
    window.addEventListener('touchstart', unlockContext, false);
    let buffers = await loadAll();
  }

  constructor (props) {
    super(props);
    let presetsList = presetsListStore.getState();
    presetsListStore.subscribe(() => {
      console.info('subscribe', arguments);
    })
    if (!presetsListStore.getState().length) {
      presetsListStore.dispatch({
        type: 'CREATE_PRESET',
        payload: presetStore.getState()
      })
    }
    this.state = {
      presets: presetsListStore.getState()
    }
  }

  render () {
    return (
      <div>
        <p>I'm a Wrapper</p>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <p>React here!</p>
        <Wrapper/>
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));
