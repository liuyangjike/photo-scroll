import React from 'react'
import Bunk from './bunk'
import { SLIDE_WIDTH } from '../../const'
import './index.scss'

const FADE_IN = 'animated fadeIn delay-func'

export default class ScrollList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      active: 'home',
      isShow: false,
      scorllList: [
        {
          src0: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8dmtz3j20e80j074x.jpg',
          src1: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia9d7kmyj20e80j1wfb.jpg',
          src2: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8xysphj20e80j10td.jpg',
        },
        {
          src1: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8dmtz3j20e80j074x.jpg',
          src0: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8xysphj20e80j10td.jpg',
          src2: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia9d7kmyj20e80j1wfb.jpg',
        },
        {
          src2: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8dmtz3j20e80j074x.jpg',
          src1: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia8xysphj20e80j10td.jpg',
          src0: 'http://ww1.sinaimg.cn/large/b44313e1ly1g4ia9d7kmyj20e80j1wfb.jpg',
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    const { scorllList } = this.state
    const { translateX, firstHeight } = this.props
    let style = { transform: `translate3d(${translateX}px,0,0)` }
    let eleStyle = { minWidth: `${SLIDE_WIDTH}vw`}
    return (
      <section className={`scroll-list ${FADE_IN}`}>
        <ul className='list-container' style={style}>
          {
            scorllList.map((item, index) => {
              return (
                <li key={index} className='slide-elemnt' style={eleStyle} ref={e => this[`figure${index}`] = e}>
                  <Bunk translateX={translateX} item={item} tIndex={index} firstHeight={firstHeight} />
                </li>
              )
            })
          }
          <div className='scroll-tip'>
            <div className='text' style={{opacity: firstHeight < 98 ? 0 : 1}}>Scroll</div>
            <div className='line' style={{width: firstHeight < 98 ? '0' : '50px'}}></div>
          </div>
        </ul>
      </section>
    )
  }
}