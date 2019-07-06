import React, { Fragment } from 'react'
import './index.scss'

export default class Bunk extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { item, firstHeight, tIndex } = this.props
    const { src0, src1, src2 } = item
    let style = tIndex===0 ? { height: `${firstHeight}vh` } : { height: `${53}vh` }
    return (
      <div className='bunk-elements'>
        <img className='bunk-element posi-zero' style={style} src={src0} alt="" />
        <img className='bunk-element posi-one' src={src1} alt="" />
        <img className='bunk-element posi-two' src={src2} alt=""/>        
      </div>
    )
  }
}