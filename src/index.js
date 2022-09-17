import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { GroupView } from './GroupView'
import { RuleView } from './RuleView'

export const ReactRuleGroup = ({ rules, level = 0, updateJson, inputJson }) => {
  const [ruleArr, setRuleArr] = useState([])
  
  useEffect(() => {
    setRuleArr(rules)
  }, [rules])
  return (
    <div className={styles.test} style={{ paddingLeft: `50px` }}>
      {ruleArr.map((r, i) => {
        if (r.type === 'group') {
          return (
            <GroupView
              key={i}
              id={r.id}
              operator={r.operator}
              rules={r.rules}
              level={level}
              input={inputJson}
              // addFilter={addFilter}
            />
          )
        }
        if (r.type === 'rule') {
          return <RuleView key={i} data={r.condition} />
        }
      })}
    </div>
  )
}
