import React from 'react'
import './index.scss'

const FADE_IN = 'animated fadeInRight'

export default class BottomNum extends React.PureComponent{
  constructor(props) {
    super(props)
  }

  render() {
    const { activeIndex } = this.props 

    return (
      <div className={`num-container ${FADE_IN}`}>
        <div className='text' >{activeIndex + 1}</div>
        <div className='rect'></div>
        <div className='text'>34</div>
      </div>
    )
  }
}