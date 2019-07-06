import React from 'react'
import './index.scss'

const FADE_IN = 'animated fadeInRight'

export default class Info extends React.PureComponent{

  render() {

    return (
      <div className={`info ${FADE_IN}`}>
        <div className='main'>Liuyang</div>
        <div className='sub'>18817843920@163.com</div>
        <div className='sub'>www.goingtraceing.com</div>
        <div className='sub'>wx: wx_jike</div>
      </div>
    )
  }
}