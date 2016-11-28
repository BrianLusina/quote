import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import styles from './assets/index.css';
import jQuery from 'jquery';

const appDoc = document.getElementById('app')
ReactDOM.render(
    <App />,
    appDoc,
    () => {console.timeEnd("quote-app")}
);
