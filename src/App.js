import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'flexboxgrid/css/flexboxgrid.min.css'
import './main.css'
import './icons/favicon.ico'


import Worker from './worker/main.worker'
import presetsListStore from './stores/presets-list-store'
import presetStore from './stores/preset-store'
import Layout from './components/Layout'


const App = () => {
  return (
    <div className='App'>
      <header>
        <div className='container container-fluid'>
          <div>
            Metronome
          </div>
        </div>
      </header>
      <Layout/>
      <footer>
        <div className='container container-fluid'>
          <div>
            Metronome
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App

ReactDOM.render(
  <Provider store={presetStore}>
    <App />
  </Provider>, document.getElementById('content'))
