import React from 'react'
import { render }from 'react-dom'
import App from './components/App'
import styles from './styles/index.css'

render(<App styles= { styles } />, document.getElementById('app'), () => {console.timeEnd("quote-app")});
