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
    const { isShow } = this.state
    const { router, onRoute } = this.props
    if (!isShow) return null
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