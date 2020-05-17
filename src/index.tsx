import React from 'react'
import ReactDOM from 'react-dom'
import Complex from './pages/Complex'
import './index.scss'

const Home = () => {
  return <Complex />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
