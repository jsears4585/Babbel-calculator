import React, { Component } from 'react'

import Button from '../components/Button'

class MemoryPad extends Component {
  logValue = value => {
    console.log(value)
  }

  render() {
    return (
      <div id="MemoryPad">
        <Button value={ 'MS' } func={ this.logValue } />
        <Button value={ 'MR' } func={ this.logValue } />
      </div>
    )
  }
}

export default MemoryPad
