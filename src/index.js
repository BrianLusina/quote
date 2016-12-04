import React from 'react'
import { render }from 'react-dom'
import App from './components/App'
//import './styles/index.css'
import './styles/index.scss'

render(<App />, document.getElementById('app'), () => {console.timeEnd("quote-app")});
