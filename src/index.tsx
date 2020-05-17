import React from 'react'
import ReactDOM from 'react-dom'
import Units from './pages/Units'
import './index.scss'

const Home = () => {
  return <Units />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
