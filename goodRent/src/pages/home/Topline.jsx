import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class Topline extends Component {
  constructor(props){
      super(props)
      this.state={
        toplineData:['摩根大通增租领展东九龙海滨汇1层楼面至30万呎','开发区人才培养新政重磅发布!','香港证监会因租金过高拟迁出中环 洽租太古坊商厦10层楼面']
      }
      setTimeout(()=>{
        new Swiper('.topCon',{
            direction: 'vertical',
            autoplay:true
        })
      },100)
  }
  render() {
    let {
        toplineData
    } = this.state
    return (
      <div className="topline_wrap">
        <i>行业头条</i>
        <div className="swiper-container topCon">
            <div className="swiper-wrapper">
                {
                    toplineData && toplineData.map((v,i)=>{
                        return <div className="swiper-slide" key={i}>{v}</div>
                    })
                }
            </div>
        </div>
        <span>&gt;</span>
      </div>
    )
  }
}
