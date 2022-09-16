import React from 'react'

import { ReactRuleGroup } from 'react-rule-group'
import 'react-rule-group/dist/index.css'
const inputJson = [
  {
    "id": "g1",
    "type": "group",
    "rules": [
      {
        "type": "rule",
        "text": "Select contacts in last 7 number"
      },
      {
        "id": "g1_g2",
        "type": "group",
        "rules": [
          {
            "type": "rule",
            "text": "Select from emoji"
          },
          {
            "type": "rule",
            "text": "Contacts from Email Channel"
          },
          {
            "id": "g1_g2_g3",
            "type": "group",
            "rules": [{
              "type": "rule",
              "text": "master_contact > gender equals F"
            },
            {
              "type": "rule",
              "text": "master_contact > birth_date is after current_date"
            },],
            "operator": "AND"
          }
        ],
        "operator": "OR"
      }
    ],
    "operator": "AND"
  }
]

const App = () => {
  return <ReactRuleGroup text="Create React Library Example 😄" rules={inputJson} />
}

export default App
