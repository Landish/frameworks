import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import './assets/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
