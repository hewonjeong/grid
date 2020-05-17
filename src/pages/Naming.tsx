import React from 'react'
import styles from './Naming.module.scss'

const Naming = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>Left Sidebar</div>
      <div className={styles.mainContent}>Main Content</div>
      <div className={styles.rightSidebar}>Right Sidebar</div>
      <div className={styles.footer}>Footer</div>
    </div>
  )
}

export default Naming
