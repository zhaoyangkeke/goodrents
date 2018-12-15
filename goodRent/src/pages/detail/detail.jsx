import React, { Component } from 'react'
import './detail.css'
import DetailSwiper from './detailSwiper'
import DetailContent from './DetailContent'

/**
 * DetailSwiper 轮播图
 * DetailContent 详情文字内容
 * 
 * **/

class Detail extends Component {
  render() {
    return (
      <div className="detail-wrap">
         <DetailSwiper></DetailSwiper>
         <DetailContent></DetailContent>
      </div>
    )
  }
}
export default Detail
