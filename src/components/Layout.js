import React, { Component } from "react";

import context from '../utils/context';
import {loadAll, getBuffer} from '../utils/buffers';

import presetStore from '../stores/preset-store';
import presetsListStore from '../stores/presets-list-store';
import { createPreset } from '../actions/presets-list-actions';
import Player from './Player';

let unlockContext = () => {
  context.unlock( () => {
      window.removeEventListener('touchstart', unlockContext);
  } );
}; 

class Layout extends React.Component {

  constructor (props) {
    super(props);

    if (!presetsListStore.getState().length) {
        createPreset(presetStore.getState());
    }
    this.state = {
        presets: presetsListStore.getState()
    }
  }

  async componentWillMount () {
    window.addEventListener('touchstart', unlockContext, false);
    let buffers = await loadAll();
  }

  render () {
    return (
      <div className="Layout container">
        <Player/>
      </div>
    );
  }
}

export default Layout;