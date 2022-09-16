# react-rule-group

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-rule-group.svg)](https://www.npmjs.com/package/react-rule-group) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-rule-group
```

## Usage

```jsx
import React, { Component } from 'react'

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
          ],
            "operator": "AND"
          }
        ],
        "operator": "OR"
      }
    ],
    "operator": "AND"
  }
]
class Example extends Component {
  render() {
    return <ReactRuleGroup rules={inputJson} />
  }
}
```

## License

MIT © [praveenax](https://github.com/praveenax)
