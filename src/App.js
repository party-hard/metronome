import React, { Component } from "react";
import ReactDOM from "react-dom";
import './main.css';
import Worker from './worker/main.worker';
import context from './utils/context.js';
import {loadAll, getBuffer} from './components/buffers.js';

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
