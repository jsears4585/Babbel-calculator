import React, { Component } from 'react'
import { connect } from 'react-redux'

import NumberPad from './NumberPad'
import MemoryPad from './MemoryPad'
import Display from '../components/Display'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Display output={ this.props.store.getState().output } />
        <MemoryPad store={ this.props.store } />
        <NumberPad store={ this.props.store } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { output: state.output }
}

export default connect(mapStateToProps)(App)
