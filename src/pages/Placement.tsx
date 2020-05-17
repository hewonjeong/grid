import React from 'react'
import styles from './Placement.module.scss'

const Placement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridItem}>1</div>
      <div className={styles.gridItem}>2</div>
      <div className={styles.gridItem}>3</div>
      <div className={styles.gridItem}>4</div>
      <div className={styles.gridItem}>5</div>
      <div className={styles.gridItem}>6</div>
    </div>
  )
}

export default Placement
