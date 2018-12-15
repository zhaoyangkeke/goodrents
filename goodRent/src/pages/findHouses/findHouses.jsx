import React, { Component } from 'react'
import './findHouses.css'

class FindHouses extends Component {
  state={
      findHousesDesList:[
          {
              num:1,
              des:'填写手机号码'
          },{
            num:2,
            des:'10分钟内客服回访'
          },{
            num:3,
            des:'专业顾问量身制定选址方案'
          },{
            num:4,
            des:'实地带看'
          }
      ],
      findHousesDesImgList:[
          {
              sim:'真',
              des:'所有房源实地勘测'
          },{
            sim:'快',
            des:'一小时快速找房'
         },{
            sim:'专',
            des:'专业顾问全面选址分析'
         },{
            sim:'全',
            des:'注册、装修等企业服务一站全搞定'
         }
      ]
  }
  goToHome = () => {
      this.props.history.push('/home')
  }
  render() {
    let {
        findHousesDesList,
        findHousesDesImgList
    } = this.state;
    return (
      <div className="findHouse-page">
        <div className="findHouseWrapHead">
            <i className="icon iconfont icon-arrow-left" onClick={this.goToHome}></i>
            <img src="https://wap-cdn.haozu.com/static/build/image/logo.png" className="findHouseWrapHeadImg"/>
        </div>
        <div className="findHouseCon">
            <div className="findhousesConBan">
                <img src="https://m.haozu.com/static/build/image/entrust_bg1.jpg"/>
                <div className="findHousesConFoot">
                    快速找办公室入口
                </div>
            </div>
            <div className="findHousePeople">
                已有<span>3</span><span>6</span><span>6</span><span>8</span><span>2</span><span>7</span>人提交了委托申请
            </div>
            <div className="findHousesMsgs">
                <input placeholder="请输入您的手机号" className="telIpt"/>
                <button className="findHousesImediate">立即委托</button>
            </div>
            <div className="findHousesOffice">
                <h5>找办公室流程</h5>
                <div className="findHousesOfficeCon">
                    <img src={require("../../static/img/tu.png")}/>
                    <ul className="findHousesOfficeConRight">
                        {
                            findHousesDesList && findHousesDesList.map((v,i)=>{
                                return <li key={i}><span>{v.num}</span>{v.des}</li>
                            })
                        }
                    </ul>
                </div>
                <h5>为什么选择好租？</h5>
                <p>
                好租网-领先的O2O互联网办公服务平台，致力于为中国企业提供从写字楼租赁到覆盖各类强相关服务领域的整体解决方案，打造O2O企业服务平台的生态闭环。
                </p>
                <ol className="findHousesOfficeConOl">
                    {
                        findHousesDesImgList && findHousesDesImgList.map((v,i)=>{
                            return  <li key={i}><img src={require('../../static/img/right.png')}/>{v.sim}:<span>{v.des}</span></li>
                        })
                    }
                </ol>
            </div>
        </div>
        <div className="findHouseFoot">
            <p className="findHouseFootTel">电话咨询</p>
            <p className="findHouseFootImediate">立即委托</p>
        </div>
      </div>
    )
  }
}
export default FindHouses
