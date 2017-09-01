import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import Logo from './babbel-bubble.png'

import inputReducer from './reducers/inputReducer'
import './index.css'

const store = createStore(
  inputReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <img alt="babbel-logo" src={ Logo } width="100" />
      <h1 className="fancy">Calc</h1>
      <App store={ store } />
    </div>
  </Provider>,
  document.getElementById('root')
)
