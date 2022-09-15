import React from 'react'
import styles from './styles.module.css'

const GroupView = ({ operator, rules, level }) => {
  return (
    <div className={styles.groupView}>
      <div
        className={styles.groupView2}
        style={{ borderColor: `${operator === 'AND' ? 'blue' : 'orange'}` }}
      ></div>
      <div className={styles.groupView3}>
        <div className={styles.operator}>{operator}</div>
        {rules && rules.length > 0 && (
          <ReactRuleGroup text='' rules={rules} level={level + 1} />
        )}
        <button className={styles.addFilterBtn}>Add Filter</button>
        <button className={styles.addGroupBtn}>Add Group</button>
      </div>
    </div>
  )
}

const RuleView = ({ data }) => {
  return <div className={styles.ruleText}>{data}</div>
}

export const ReactRuleGroup = ({ text, rules, level = 0 }) => {
  return (
    <div className={styles.test} style={{ paddingLeft: `50px` }}>
      {rules.map((r, i) => {
        if (r.type === 'group') {
          return (
            <GroupView
              key={i}
              operator={r.operator}
              rules={r.rules}
              level={level}
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
