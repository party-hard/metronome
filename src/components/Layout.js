import React, { Component } from 'react'

import context from '../utils/context'
import { loadAll, getBuffer } from '../utils/buffers'

import Player from './Player'

let unlockContext = () => {
  context.unlock( () => {
      window.removeEventListener('touchstart', unlockContext)
  } )
}

export default class Layout extends React.Component {

  async componentWillMount () {
    window.addEventListener('touchstart', unlockContext, false)
    let buffers = await loadAll()
  }

  render () {
    return (
      <div className='Layout container'>
        <Player/>
      </div>
    )
  }
}