import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'

import inputReducer from './reducers/inputReducer'

import './index.css'

const store = createStore(
  inputReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={ store }>
    <App store={ store } />
  </Provider>,
  document.getElementById('root')
)
