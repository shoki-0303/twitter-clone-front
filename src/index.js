import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './reset.css'

import Container from './components/Container'

import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
