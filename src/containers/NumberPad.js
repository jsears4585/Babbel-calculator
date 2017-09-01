import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'

import '../index.css'

class NumberPad extends Component {

  updateOutput = input => {
    this.props.store.dispatch({
      type: 'UPDATE_OUTPUT',
      payload: input,
    })
  }

  useOperation = op => {
    this.props.store.dispatch({
      type: 'USE_OPERATION',
      payload: op
    })
  }

  equals = () => {
    this.props.store.dispatch({
      type: 'EQUALS',
      payload: null
    })
  }

  render() {
    return (
      <div>
        <div id="NumberPad">
          <Button value={ 7 } func={ this.updateOutput } />
          <Button value={ 8 } func={ this.updateOutput } />
          <Button value={ 9 } func={ this.updateOutput } />
          <Button value={ '/' } func={ this.useOperation } /><br />

          <Button value={ 4 } func={ this.updateOutput } />
          <Button value={ 5 } func={ this.updateOutput } />
          <Button value={ 6 } func={ this.updateOutput } />
          <Button value={ 'x' } func={ this.useOperation } /><br />

          <Button value={ 1 } func={ this.updateOutput } />
          <Button value={ 2 } func={ this.updateOutput } />
          <Button value={ 3 } func={ this.updateOutput } />
          <Button value={ '-' } func={ this.useOperation } /><br />

          <Button value={ 0 } func={ this.updateOutput } />
          <Button value={ '.' } func={ this.updateOutput } />
          <Button value={ '=' } func={ this.equals } />
          <Button value={ '+' } func={ this.useOperation } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { output: state.output }
}

export default connect(mapStateToProps)(NumberPad)
