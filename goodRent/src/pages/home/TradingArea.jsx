import React, { Component } from 'react'

export default class TradingArea extends Component {
  constructor(props){
    super(props)
    this.state={
      tradingAreaData:[
        {
          url:"https://fang-oss.haozu.com/hzfs30/CE/IO/49/7177500f9780bd24e900a95be10c281e.jpg@280w_350h_90Q",
          name:"CBD/国贸"
        },{
          url:"https://fang-oss.haozu.com/hzfs54/BJ/RS/T5/fb00cf9007e4afe6061389771f55ad53.jpg@280w_350h_90Q",
          name:"中关村"
        },{
          url:"https://fang-oss.haozu.com/hzfs69/NP/TW/Y4/b4f504a76a5f2fc1d396e3ab98d8fab6.jpg@280w_350h_90Q",
          name:"丰台科技园区"
        },{
          url:"https://fang-oss.haozu.com/hzfs27/EU/V0/27/9ac0f3b04a5bb9dc331e406d0914ceb5.jpg@280w_350h_90Q",
          name:"望京"
        }
      ]
    }
  }
  render() {
    let {
      tradingAreaData
    } = this.state;
    return (
      <div className="tradingArea_wrap">
          <div className="tx_title">核心商圈</div>
          <div className="tx_content">
            {
               tradingAreaData && tradingAreaData.map((v,i)=>{
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
    )
  }
}
