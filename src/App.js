import React from 'react';
import LeftTitle from './components/left-title'
import Navigation from './components/navigation'
import ScrollList from './components/scroll-list'
import { SLIDE_WIDTH } from './const'


import './App.scss';

const slideItemWidth = SLIDE_WIDTH * window.innerWidth / 100

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      translateX: 0,
      isScroll: false,
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.wheelHandle, false)

  }

  wheelHandle = (e) => {
    const { isScroll, activeIndex, translateX } = this.state
    if (!isScroll) {
      this.setState({
        isScroll: true
      })
    }
    const { wheelDeltaY } = e
    if (translateX > 0 && wheelDeltaY > 0) return
    let willIndex = Math.floor((-translateX) / slideItemWidth)
    if (activeIndex !== willIndex) {
      this.setState({
        activeIndex: willIndex
      })  
    }
    this.setState({
      translateX: translateX + wheelDeltaY * 0.75
    })
  }
  
  render() {
    const { activeIndex, translateX } = this.state
    return (
      <div className="App">
        <LeftTitle ref={e => this.title = e} activeIndex={activeIndex}/>
        <Navigation />
        <ScrollList translateX={translateX}/>
      </div>
    )
  }
  
}

export default App;
