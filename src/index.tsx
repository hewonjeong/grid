import React from 'react'
import ReactDOM from 'react-dom'
import Naming from './pages/Naming'
import './index.scss'

const Home = () => {
  return <Naming />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
