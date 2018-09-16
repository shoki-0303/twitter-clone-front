import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './reset.css'

import Container from './components/Container'


ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
