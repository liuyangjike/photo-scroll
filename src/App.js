import React from 'react';
import LeftTitle from './components/left-title'
import BottomNum from './components/bottom-num'
import Navigation from './components/navigation'
import ScrollList from './components/scroll-list'
import Info from './components/info'
import { SLIDE_WIDTH } from './const'


import './App.scss';

const initPosX = window.innerWidth - window.innerHeight * 0.75 

const slideItemWidth = SLIDE_WIDTH * window.innerWidth / 100

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      translateX: initPosX,
      firstHeight: 100,
      isEndAnimate: true,
      router: 'home'
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.wheelHandle, false)

  }

  wheelHandle = (e) => {
    const { activeIndex, translateX, firstHeight } = this.state
    const { wheelDeltaY } = e
    if (translateX < -slideItemWidth * 2 + initPosX/3 && wheelDeltaY < 0 ) return
    if (translateX > initPosX + 3 && wheelDeltaY > 0) {  // 滚到底部还不是100,处理
      if (firstHeight > 101) {
        this.setState({
          firstHeight: firstHeight - 0.6
        })
      } else if (firstHeight < 99) {
        this.setState({
          firstHeight: firstHeight + 0.6
        })
      } else {
        this.setState({
          firstHeight: 100
        })
      }
      return
    }
    let willIndex = Math.floor((-translateX + slideItemWidth /4 ) / slideItemWidth)
    if (activeIndex !== willIndex) {
      this.setState({
        activeIndex: willIndex > 0 ? willIndex : 0
      })  
    }
    this.setState({
      translateX: translateX + wheelDeltaY * 0.70
    })
    if (translateX >= initPosX * 0.66 && translateX <= initPosX) {
      this.setState({
        firstHeight: firstHeight + wheelDeltaY * 0.1
      })
    } else {
      if (firstHeight <= 58 && firstHeight > 53) {
        this.setState({
          firstHeight: firstHeight - 0.5
        })
        return
      }
    }

  }

  onEndAnimate = () => {
    this.setState({
      isEndAnimate: false
    })
  }

  changeRoute = (target) => {
    this.setState({
      router: target
    })
  }
  
  render() {
    const { activeIndex, translateX, firstHeight, isEndAnimate, router } = this.state
    const isHome = router==='home'
    return (
      <div className="App">
        <LeftTitle ref={e => this.title = e} activeIndex={isHome? activeIndex : 0} translateX={translateX} onEndAnimate={this.onEndAnimate}/>
        {firstHeight < 96 && isHome && <BottomNum activeIndex={activeIndex}/>}
        {firstHeight < 96 && <Navigation onRoute={this.changeRoute} router={router} />}
        {!isEndAnimate && isHome && <ScrollList translateX={translateX} firstHeight={firstHeight} />}
        {!isHome && <Info/>}
      </div>
    )
  }
  
}

export default App;
