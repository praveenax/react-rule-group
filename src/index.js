import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { GroupView } from './GroupView'
import { RuleView } from './RuleView'

export const ReactRuleGroup = ({ text, rules, level = 0 }) => {
  const [ruleArr, setRuleArr] = useState([])
  // const addFilter = (id) => {
  //   //show modal for add filter
  //   console.log('test')
  //   let temp = ruleArr[0].rules
  //   temp.push({
  //     type: 'rule',
  //     text: 'this is a new rule'
  //   })

  //   ruleArr[0].rules = temp;
  //   console.log(ruleArr)
  //   setRuleArr(ruleArr)
  // }
  
  useEffect(() => {
    setRuleArr(rules)
  }, [rules])
  return (
    <div className={styles.test} style={{ paddingLeft: `50px` }}>
      {/* RULEGROUP{ruleArr.length} */}
      {ruleArr.map((r, i) => {
        if (r.type === 'group') {
          return (
            <GroupView
              key={i}
              id={r.id}
              operator={r.operator}
              rules={r.rules}
              level={level}
              // addFilter={addFilter}
            />
          )
        }
        if (r.type === 'rule') {
          return <RuleView key={i} data={r.text} />
        }
      })}
    </div>
  )
}
