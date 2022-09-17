import React, {useState} from 'react'
import ReactJson from 'react-json-view'
import { ReactRuleGroup } from 'react-rule-group'
import 'react-rule-group/dist/index.css'
const inputJson = [
  {
    "id": "g1",
    "type": "group",
    "rules": [
      {
        "type": "rule",
        "condition": {
          "condition_type":"last_name",
          "condition_operator":"=",
          "condition_value":"Praveen",
        }
      },
      {
        "id": "g1_g2",
        "type": "group",
        "rules": [
          {
            "type": "rule",
            "condition": {
              "condition_type":"",
              "condition_operator":"",
              "condition_value":"",
            }
          },
          {
            "type": "rule",
            "condition": {
              "condition_type":"",
              "condition_operator":"",
              "condition_value":"",
            }
          },
          {
            "id": "g1_g2_g3",
            "type": "group",
            "rules": [{
              "type": "rule",
              "condition": {
                "condition_type":"",
                "condition_operator":"",
                "condition_value":"",
              }
            },
            {
              "type": "rule",
              "condition": {
                "condition_type":"",
                "condition_operator":"",
                "condition_value":"",
              }
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
  const [json,setJson] = useState(inputJson);
  const updateJson = (ip) => {
    setJson(ip)
  }
  return <><ReactRuleGroup text="Create React Library Example 😄" input={json} rules={json} updateJson={updateJson} /><br/><ReactJson src={json} /></>
}

export default App
