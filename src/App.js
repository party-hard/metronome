import React, { Component } from "react";
import ReactDOM from "react-dom";
require('./main.css');
require.context('./worker/', true, /\.js$/);
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
