import React from 'react'
import Figure from './figure'
import { SLIDE_WIDTH } from '../../const'
import './index.scss'

export default class ScrollList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      active: 'home',
      isShow: false,
      scorllList: [
        {
          src: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8dmtz3j20e80j074x.jpg'
        },
        {
          src: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8xysphj20e80j10td.jpg'
        },
        {
          src: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia9d7kmyj20e80j1wfb.jpg'
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    const { scorllList } = this.state
    const { translateX, onShowEle } = this.props
    let style = { transform: `translate3d(${translateX}px,0,0)` }
    let eleStyle = { minWidth: `${SLIDE_WIDTH}vw`}
    return (
      <section className='scroll-list'>
        <ul className='list-container' style={style}>
          {
            scorllList.map((item, index) => {
              return (
                <li key={index} className='slide-elemnt' style={eleStyle} ref={e => this[`figure${index}`] = e}>
                  <Figure tIndex={index} imgUrl={item.src} />
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}