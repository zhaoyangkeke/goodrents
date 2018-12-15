import React, { Component } from 'react'
import './introduce.css'

class Introduce extends Component {
    constructor(props){
        super(props)
        this.state={
          introduceTopData:[
              {
                  start:'真',
                  des:'所有房源实地勘测'
              },{
                  start:'广',
                  des:'海量楼盘全面覆盖'
              },{
                  start:'专',
                  des:'专业顾问选址分析'
              },{
                  start:'全',
                  des:'企业服务一站搞定'
              }
          ] 
        }
    }
    render() {
      let {
          introduceTopData
      } = this.state
      return (
        <div className="introduce_wrap">
           <ul className="introduce_wrap_top">
              {
                  introduceTopData && introduceTopData.map((v,i)=>{
                      return <li key={i}><b>{v.start}</b><span>{v.des}</span></li>
                  })
              }
           </ul>
           <ul className="company_intro">
              <li><img src="https://wap-cdn.haozu.com/static/image/new/logo.png"/></li>
              <li className="free">免费咨询：400-085-2093</li>
              <li className="about">关于好租</li>
              <li>&copy;2015-2018北京好租科技发展有限公司京ICP备16019026</li>
              <li>京公网安备11010802025685号</li>
              <li>地址:北京市海淀区上地软件园南路57号八维学院</li>
           </ul>
        </div>
      )
    }
}
export default Introduce