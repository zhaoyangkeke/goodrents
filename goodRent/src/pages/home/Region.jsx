import React, { Component } from 'react'

export default class Region extends Component {
  constructor(props){
      super(props)
      this.state={
          regionData:['全部','海淀','朝阳','东城','西城','丰台','大兴','石景山','昌平','通州','顺义']
      }
  }
  render() {
    let {
        regionData
    } = this.state;
    return (
      <div className="region_wrap">
         <div className="region_wrap_tit">
            <b>区域</b>
            <span>附近写字楼</span>
         </div>
         <ul className="region-con">
           {
                regionData && regionData.map((v,i)=>{
                    return <li key={i}>{v}</li>
                })    
           }
         </ul>
         <img src="https://wap-cdn.haozu.com/static/image/new/register_09.jpg" className="regionBan"/>
      </div>
    )
  }
}
