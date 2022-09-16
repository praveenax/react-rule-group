import React, { useState, useEffect } from 'react'

import styles from './styles.module.css'

export const RuleView = ({ data }) => {
  return (
    <div className={styles.ruleText}>
      <select className={styles.ruleSelect} style={{ marginRight: '20px' }} value={data.condition_type}>
        <option value="first_name">First Name</option>
        <option value="last_name">Last Name</option>
        <option value="age">Age</option>
      </select>
      {/* {data} */}
      <select className={styles.ruleSelect} style={{ marginRight: '20px' }} value={data.condition_operator}>
        <option value="=">=</option>
        <option value=">">{'>'}</option>
        <option value="<">{'<'}</option>
      </select>
      <input className={styles.ruleSelect} type='text' value={data.condition_value}/>
    </div>
  )
}
