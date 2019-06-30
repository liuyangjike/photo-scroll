import React from 'react'
import './index.scss'

export default class Figure extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tIndex: props.tIndex
    }
  }

  componentDidMount() {
  }

  render() {
    const { imgUrl } = this.props
    return (
      <div ref={e => this.figure = e}>
        <img src={imgUrl} alt=""/>
      </div>
    )
  }
}