import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './pages/Layout'
import './index.scss'

const Home = () => {
  return <Layout />
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
