import React from 'react'
import { render } from 'react-dom'

import Input from '../../src'

class Validator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      message: ''
    }
    this.set = this.set.bind(this)
    this.validate = this.validate.bind(this)
  }

  set (value) {
    this.setState({value})
  }

  validate (value) {
    if (value === this.props.value) {
      this.setState({message: `You typed "${this.props.value}". Good job!`})
    } else {
      this.setState({message: `You didn\`t type "${this.props.value}"! Terrible!`})
    }
  }

  render () {
    return (
      <div style={{padding: 30}}>
        {this.state.value}
        <br />
        type "{this.props.value}"
        <br />
        <Input
          onChange={this.set}
          onBlur={this.validate}
        />
        <br />
        {this.state.message}
      </div>
    )
  }
}

const Demo = () => (
  <main>
    <Validator value='snakes' />
    <Validator value='badgers' />
  </main>
)

render(<Demo />, document.querySelector('#demo'))

