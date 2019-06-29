import React from 'react'
import './index.scss'

const FADE_OUT = 'animated fadeOutDown'
const FADE_IN = 'animated fadeInDown'

const LIST = [
  {
    main: 'Maya',
    sub: 'Haris'
  },
  {
    main: 'COVER',
  },
  {
    main: 'LIUYANG',
  },
  {
    main: 'Maya',
    sub: 'Haris'
  },
  {
    main: 'COVER',
  },
  {
    main: 'LIUYANG',
  }
]

export default class LeftTitle extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      fadeOut: '',
      fadeIn: FADE_IN,
      position: (window.innerWidth - 200) / 2,
      subLeft: 0
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.wheelHandle, false)
    this.title.addEventListener('animationend', () => {
      this.setState({
        fadeIn: '',
        position: 0,
        subLeft: 80
      })
    })
    this.sub.addEventListener('transitionend', () => {
      this.setState({
        subLeft: 0
      })
    })
  }

  wheelHandle = (e) => {
    const { fadeIn, activeIndex } = this.state
    if (!fadeIn) {
      this.setState({
        fadeOut: FADE_OUT
      })
      this.title.addEventListener('animationend', () => {
        this.setState({
          fadeOut: '',
          activeIndex: activeIndex + 1
        })
      })
    }
  }

  render() {
    const { fadeOut, activeIndex, fadeIn, position, subLeft } = this.state
    const titleObj = LIST[activeIndex] || {}
    let titleStyle = { left: `${position}px` }
    let subStyle = { marginLeft: `${subLeft}px`}

    return (
      <div style={titleStyle} className={`title-container ${fadeOut} ${fadeIn}`} ref={e => this.title = e}>
        <div className='main-text' >{titleObj.main}</div>
        {titleObj.sub && <div style={subStyle} className='sub-text' ref={e => this.sub = e}>{titleObj.sub}</div>}
      </div>
    )
  }
}