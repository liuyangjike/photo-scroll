import React from 'react';
import LeftTitle from './components/left-title'
import Navigation from './components/navigation'
import ScrollList from './components/scroll-list'
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
      isEndAnimate: true
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.wheelHandle, false)

  }

  wheelHandle = (e) => {
    const { activeIndex, translateX, firstHeight } = this.state
    const { wheelDeltaY } = e
    if (translateX > initPosX + 5 && wheelDeltaY > 0) {
      this.setState({
        firstHeight: 100
      })
      return
    }
    let willIndex = Math.floor((-translateX) / slideItemWidth)
    if (activeIndex !== willIndex) {
      this.setState({
        activeIndex: willIndex
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
      if (firstHeight <= 58) {
        this.setState({
          firstHeight: 53
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
  
  render() {
    const { activeIndex, translateX, firstHeight, isEndAnimate } = this.state
    return (
      <div className="App">
        <LeftTitle ref={e => this.title = e} activeIndex={activeIndex} translateX={translateX} onEndAnimate={this.onEndAnimate}/>
        <Navigation />
        {!isEndAnimate && <ScrollList translateX={translateX} firstHeight={firstHeight} />}
      </div>
    )
  }
  
}

export default App;
