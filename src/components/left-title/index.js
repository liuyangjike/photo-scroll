import React from 'react'
import './index.scss'

const FADE_OUT = 'animated fadeOutDown delay-short'
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

export default class LeftTitle extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,  // 控制与props不同步形成动画
      fadeOut: '',
      fadeIn: FADE_IN,
      position: (window.innerWidth - 200) / 2,
      subLeft: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    const { activeIndex } = this.props
    if (activeIndex !== nextProps.activeIndex) { // 控制消失动画
      this.setState({
        fadeOut: FADE_OUT,
      })
    }
  }

  componentDidMount() {
    this.title.addEventListener('animationend', () => {
      const { fadeOut } = this.state
      const { activeIndex } = this.props
      const isFadeOut = !!fadeOut
      if (isFadeOut) {  // 下一个标题动画结束后触发
        this.setState({
          activeIndex,
          fadeOut: ''
        })
      } else {   // 开场中间动画结束, 触发向左的动画
        this.setState({
          fadeIn: '',
          position: 0,
          subLeft: 80,
        })
      }
    })
    this.sub.addEventListener('transitionend', () => {  // 开车过渡动画的第二标题动画
      const { activeIndex, onEndAnimate } = this.props
      this.setState({
        subLeft: 0
      })
      onEndAnimate()
    })
  }


  render() {
    const { fadeOut, fadeIn, position, subLeft, activeIndex } = this.state
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