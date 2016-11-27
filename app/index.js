import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import foundation from './assets/styles/foundation.min.css';
import styles from './assets/styles/index.css';


const appDoc = document.getElementById('app')
ReactDOM.render(<App />, appDoc);