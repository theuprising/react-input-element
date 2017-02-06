# react-input-element

Just like a normal <input> element except it fires onChange and onBlur with the input value rather than the event.

[try it out on codepen](http://codepen.io/amonks/pen/mRKveg?editors=0010)

```javascript
import React from 'react'
import { render } from 'react-dom'

import Input from 'react-input-element'

class Simple extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <Input 
        value={this.state.value} 
        onChange={value => this.setState({value})}
      />
    )
  }
}
```

