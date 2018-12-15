import React, { Component } from 'react'

export default class Information extends Component {
  constructor(props){
    super(props)
    this.state = {
        informationTit:'投资写字楼和投资其他区别在哪里？',
        informationContent:'近年来，写字楼正逐渐成为房地产市场的热点，投资写字楼已成为个人投资的新“金矿”。未来的十年，不一定是住宅地产的黄金十年，但一定会是写字楼的黄金十年。  			',
        informationList:[
          {
            tit:'粤港澳大湾区规划将出台 四大产业链受益',
            time:'05-28'
          },{
            tit:'聚焦博鳌·房地产论坛 好租首发2018年2季度商办报告',
            time:'07-25'
          },{
            tit:'商业与联合办公完美复合，米域新作亮相中山公园',
            time:'11-01'
          },{
            tit:'印花税法征求意见稿：免征个人转让、租赁住房印花税',
            time:'11-01'
          }
        ]
    }
  }
  render() {
    let {
      informationTit,
      informationContent,
      informationList
    } = this.state
    return (
      <div className="information_wrap">
          <div className="infomation_tit">
            <b>资讯中心</b>
            <span>更多>></span>
          </div>
          <dl className="information_con">
             <dt>
               <img src="https://fang-oss.haozu.com//hzfs65/FG/JY/03/1168eee91edc159f8e20a18291c92504.jpg@230w_180h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10"/>
             </dt>
             <dd>
                <h6>{informationTit}</h6>
                <p>{informationContent}</p>
             </dd>
          </dl>
          <ul className="information_list">
            {
              informationList && informationList.map((v,i)=>{
                return <li key={i}><span>{v.tit}</span><b>{v.time}</b></li>
              })
            }
          </ul>
          <img src="https://wap-cdn.haozu.com/static/build/image/through_beijng.jpg" className="infor_ban"/>
      </div>
    )
  }
}
