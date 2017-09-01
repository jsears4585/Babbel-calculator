import React, { Component } from 'react'

import Input from '../components/Input'
import NumberPad from './NumberPad'
import MemoryPad from './MemoryPad'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Input />
        <NumberPad />
        <MemoryPad />
      </div>
    )
  }
}

export default App
