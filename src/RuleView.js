import React, { useState, useEffect } from 'react'

import styles from './styles.module.css'

export const RuleView = ({ data }) => {
  return (
    <div className={styles.ruleText}>
      <select className={styles.ruleSelect} style={{ marginRight: '20px' }}>
        <option>First Name</option>
        <option>Last Name</option>
        <option>Age</option>
      </select>
      {/* {data} */}
      <select className={styles.ruleSelect} style={{ marginRight: '20px' }}>
        <option>=</option>
        <option>{'>'}</option>
        <option>{'<'}</option>
      </select>
      <input className={styles.ruleSelect} type='text' />
    </div>
  )
}
