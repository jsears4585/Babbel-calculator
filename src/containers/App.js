import React, { Component } from 'react'

import Display from '../components/Display'
import NumberPad from './NumberPad'
import MemoryPad from './MemoryPad'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Display />
        <MemoryPad />
        <NumberPad />
      </div>
    )
  }
}

export default App
