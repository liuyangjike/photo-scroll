import React from 'react'
import './index.scss'

const FADE_IN = 'animated fadeInRight'
const FADE_IN_DELAY = 'animated fadeInRight delay-func'



export default class NAVIGATION extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      active: 'home',
      isShow: true
    }
  }

  componentWillMount() {

  }

  render() {
    const { active, isShow } = this.state
    if (!isShow) return null
    return (
      <nav className='navigate'>
        <ul>
          <li className={FADE_IN}><a href="/" className={active === 'home' ? 'active': ''}>Home</a></li>
          <li className={FADE_IN_DELAY}><a href="/" className={active === 'concact' ? 'active': ''}>Concact</a></li>
        </ul>
      </nav>
    )
  }
}