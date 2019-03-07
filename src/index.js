import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import RepoForm from './components/RepoForm'
import RepoTable from './components/RepoTable'
import './index.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrap">
          <h1>Repo Analysis</h1>
          <div className="content">
            <RepoForm />
            <RepoTable />
          </div>
        </div>
      </div>
    );
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
