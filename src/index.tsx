import React from 'react'
import ReactDOM from 'react-dom'
import Gaps from './pages/Gaps'
import './index.scss'

const Home = () => {
  return <Gaps />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
