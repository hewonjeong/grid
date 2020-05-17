import React from 'react'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.container}>
      <header>Header</header>
      <aside>Aside 1</aside>
      <section>Section</section>
      <aside>Aside 2</aside>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout
