import React, { Component } from 'react'
import Button from '../components/Button'

import '../index.css'

class NumberPad extends Component {
  logValue = value => {
    console.log(value)
  }

  render() {
    return (
      <div id="NumberPad">
        <Button value={ 7 } func={ this.logValue } />
        <Button value={ 8 } func={ this.logValue } />
        <Button value={ 9 } func={ this.logValue } />
        <Button value={ '/' } func={ this.logValue } /><br />

        <Button value={ 4 } func={ this.logValue } />
        <Button value={ 5 } func={ this.logValue } />
        <Button value={ 6 } func={ this.logValue } />
        <Button value={ 'x' } func={ this.logValue } /><br />

        <Button value={ 1 } func={ this.logValue } />
        <Button value={ 2 } func={ this.logValue } />
        <Button value={ 3 } func={ this.logValue } />
        <Button value={ '-' } func={ this.logValue } /><br />

        <Button value={ 0 } func={ this.logValue } />
        <Button value={ '.' } func={ this.logValue } />
        <Button value={ '=' } func={ this.logValue } />
        <Button value={ '+' } func={ this.logValue } />
      </div>
    )
  }
}

export default NumberPad
