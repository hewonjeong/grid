import React from 'react'
import styles from './Gaps.module.scss'

const Placement = () => {
  return (
    <div className={styles.container}>
      {Array(10)
        .fill(null)
        .map((_, i) => i + 1)
        .map((num) => (
          <div className={styles.gridItem}>{num}</div>
        ))}
    </div>
  )
}

export default Placement
