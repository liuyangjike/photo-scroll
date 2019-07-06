import React from 'react'
import './index.scss'

const FADE_IN = 'animated fadeInRight'
const FADE_IN_DELAY = 'animated fadeInRight delay-func'

export default class NAVIGATION extends React.Component{
  render() {
    const { router, onRoute } = this.props
    return (
      <nav className='navigate'>
        <ul>
          <li className={FADE_IN}><a onClick={() => onRoute('home')} className={router === 'home' ? 'active': ''}>Home</a></li>
          <li className={FADE_IN_DELAY}><a onClick={() => onRoute('concact')}  className={router === 'concact' ? 'active': ''}>Concact</a></li>
        </ul>
      </nav>
    )
  }
}