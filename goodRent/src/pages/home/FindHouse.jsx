import React, { Component } from 'react'

export default class FindHouse extends Component {
  render() {
    return (
      <div className="FindHouse_wrap">
         <dl>
             <dt>
                 <img src="https://wap-cdn.haozu.com/static/image/new/entrust_09.jpg"/>
                 <div className="findhouse_search">
                     <p>专 业 经 纪 人 帮 你 找 办 公 室</p>
                     <div className="findhouse_innerSearch">
                         <input placeholder="请输入手机号码，顾问一对一服务"/><span>马上找房</span>
                     </div>
                 </div>
             </dt>
             <dd>已有<b className="orange">366525</b>人委托好租找到满意办公室</dd>
         </dl>
      </div>
    )
  }
}
