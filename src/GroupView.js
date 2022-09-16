import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { ReactRuleGroup } from '.'
export const GroupView = ({ id, operator, rules, level }) => {
  const [ruleSet, setRuleSet] = useState([])
  const [op, setOp] = useState(false)
  const addGroup = () => {
    setRuleSet([
      ...ruleSet,
      {
        id: 'g1_g2_g3',
        type: 'group',
        rules: [],
        operator: 'AND'
      }
    ])
  }
  const addFilter = () => {
    //show modal for add filter
    console.log('test')
    const temp = ruleSet
    // temp.push({
    //   "type": "rule",
    //   "text": "this is a new rule"
    // })
    setRuleSet([
      ...ruleSet,
      {
        type: 'rule',
        text: 'this is a new rule'
      }
    ])
    console.log(ruleSet)
  }
  useEffect(() => {
    setOp(operator)
    setRuleSet(rules)
  }, [])
  return (
    <div
      className={styles.groupView}
      style={{ borderColor: `${op === 'AND' ? '#3498db' : '#e67e22'}` }}
    >
      {/* {ruleSet.length} */}
      <div className={styles.groupView2}></div>
      <div className={styles.groupView3}>
        {ruleSet && ruleSet.length > 0 && (
          <div
            className={styles.operator}
            style={{ background: `${op === 'AND' ? '#3498db' : '#e67e22'}` }}
          >
            <select
              className={styles.selectOperator}
              value={op}
              onChange={(e) => {
                setOp(e.target.value)
              }}
            >
              <option value='AND'>AND</option>
              <option value='OR'>OR</option>
            </select>
          </div>
        )}

        {ruleSet && ruleSet.length > 0 && (
          <ReactRuleGroup text='' rules={ruleSet} level={level + 1} />
        )}
        <button className={styles.addFilterBtn} onClick={() => addFilter(id)}>
          Add Filter
        </button>
        <button className={styles.addGroupBtn} onClick={() => addGroup(id)}>
          Add Group
        </button>
      </div>
    </div>
  )
}
