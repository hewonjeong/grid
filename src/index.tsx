import React from 'react'
import ReactDOM from 'react-dom'
import Minmax from './pages/Minmax'
import './index.scss'

const Home = () => {
  return <Minmax />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
