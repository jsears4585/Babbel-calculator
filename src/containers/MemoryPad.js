import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'

class MemoryPad extends Component {

  clear = () => {
    this.props.store.dispatch({
      type: 'CLEAR',
      payload: null
    })
  }

  memStore = () => {
    this.props.store.dispatch({
      type: 'MEM_STORE',
      payload: null
    })
  }

  memRetrieve = () => {
    this.props.store.dispatch({
      type: 'MEM_RET',
      payload: null
    })
  }

  render() {
    return (
      <div id="MemoryPad">
        <Button value={ 'MS' } func={ this.memStore } />
        <Button value={ 'MR' } func={ this.memRetrieve } />
        <Button value={ 'C' } func={ this.clear } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { output: state.output }
}

export default connect(mapStateToProps)(MemoryPad)
