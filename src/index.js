import React from 'react'

const Input = props => {
  return (
    <input {...props}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      onBlur={e => props.onBlur(e.target.value)}
    />
  )
}

const id = x => x
Input.defaultProps = {
  onChange: id,
  onBlur: id
}

Input.displayName = 'Input'

export default Input

