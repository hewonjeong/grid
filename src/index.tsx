import React from 'react'
import ReactDOM from 'react-dom'
import Placement from './pages/Placement'
import './index.scss'

const Home = () => {
  return <Placement />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
