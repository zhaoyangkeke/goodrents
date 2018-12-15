import React, { Component } from 'react'

class DetailContent extends Component {
  render() {
    return (
      <div className="detailContent-wrap">
          <h3>科技园区/总部基地 诺德中心 130平米 精装修</h3> 
          <ul className="detailContent-wrap-ul">
              <li>
                  <span><b>21748</b>元/月</span>
                  <span>单价:5.5元/m2·天</span>
              </li>
              <li>
                  <span><b>130</b>m2</span>
                  <span>使用率:70%</span>
              </li>
              <li>
                  <span><b>精装修</b></span>
                  <span>高区（共18层）</span>
              </li>
          </ul>
      </div>
    )
  }
}
export default DetailContent
