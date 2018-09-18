import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './reset.css'

import Container from './Conteiners/Container'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)


ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
