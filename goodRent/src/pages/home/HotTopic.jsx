import React, { Component } from 'react'

export default class HotTopic extends Component {
  constructor(props){
      super(props)
      this.state={
          hotTopicLeftData:{
              url:"https://wap-cdn.haozu.com/static/image/new/shared_office.jpg",
              name:"共享办公"
          },
          hotTopicRightData:[
              {
                  url:"https://fang-oss.haozu.com/hzfs42/HJ/KN/R6/980c0071a4a1c19f4500ba3333c0f3e3.jpg@236w_177h_90q_1c_1e_1l",
                  name:"地铁10分钟"
              },{
                url:"https://fang-oss.haozu.com/hzfs62/HK/MV/45/fc5544c8932c6725c3b7da0cd0b18d12.jpg@236w_177h_90q_1c_1e_1l",
                name:"热门楼盘"
            },{
                url:"https://fang-oss.haozu.com/hzfs32/DG/LV/57/027e5ab33f9f5708f0f1897ca9c200a6.jpg@236w_177h_90q_1c_1e_1l",
                name:"带办公家具"
            },{
                url:"https://fang-oss.haozu.com/hzfs79/FG/IJ/QX/2eea0aad40fe5137ab11c221648d3b86.jpg@236w_177h_90q_1c_1e_1l",
                name:"知名物业"
            }
          ]
      }
  }
  render() {
     let {
        hotTopicLeftData,
        hotTopicRightData
     } = this.state
    return (
      <div className="hotTopic_wrap">
         <div className="hotTopic_tit">
            <b>热门专题</b>
            <span>更多</span>
         </div>
         <div className="hotTopic_con">
            <dl className="hotTopic_con_left">
                <dt>
                    <img src={hotTopicLeftData.url}/>
                </dt>
                <dd>{hotTopicLeftData.name}</dd>
            </dl>
            <div className="hotTopic_con_right">
                {
                    hotTopicRightData && hotTopicRightData.map((v,i)=>{
                        return <dl key={i}>
                                    <dt>
                                        <img src={v.url}/>
                                    </dt>
                                    <dd>{v.name}</dd>
                                </dl>
                    })
                }
            </div>
         </div>
      </div>
    )
  }
}
