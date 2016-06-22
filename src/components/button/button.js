import React from 'react'
import btn from './button.css'

export default class CoolButton extends React.Component {
  render() {
    return (
      <button className={btn.blue}>{this.props.text}</button>
    )
  }
}