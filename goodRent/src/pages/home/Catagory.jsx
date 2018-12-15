import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
/***
 *  写字楼出租 & 商铺出租  用list
 *  找楼盘 & 共享办公 & 创意园区 用share
 *  品牌馆 用brand
 *  帮你找房 findHouses
 *  投放资源 releaseResources 
 * **/

class Catagory extends Component {
  constructor(props){
    super(props)
    this.state={
      categorydata:[
        {
          icons:'icon iconfont icon-xieziloubiaozhunhetong',
          name:'写字楼出租',
          param:'house-list'
        },{
          icons:'icon iconfont icon-ic_project',
          name:'找楼盘',
          param:'zuxiezilou'
        },{
          icons:'icon iconfont icon-bangong',
          name:'共享办公',
          param:'zuxiezilou/a5'
        },{
          icons:'icon iconfont icon-xiaodengpao',
          name:'创意园区',
          param:'zuxiezilou/a6'
        },{
          icons:'icon iconfont icon-aipinpaiwudingyueneirong',
          name:'品牌馆',
          param:'coworkbrand'
        },{
          icons:'icon iconfont icon-dianpu',
          name:'商铺出租',
          param:'zushangpu'
        },{
          icons:'icon iconfont icon-chazhaofangyuan',
          name:'帮你找房',
          param:'weituozhaofang'
        },{
          icons:'icon iconfont icon-85',
          name:'投放房源',
          param:'fangyuanweituo'
        }
      ]
    }
  }
  goToList = (params) => {
    switch(params){
      case 'house-list':this.props.history.push('/list/'+params);break; // 写字楼出租
      case 'zushangpu':this.props.history.push('/list/'+params);break; // 商铺出租

      case 'zuxiezilou':this.props.history.push('/share/'+params);break; // 找楼盘
      case 'zuxiezilou/a5':this.props.history.push('/share/'+params);break; // 共享办公
      case 'zuxiezilou/a6':this.props.history.push('/share/'+params);break; // 创意园区

      case 'coworkbrand':this.props.history.push('/brand/'+params);break; // 品牌馆

      case 'fangyuanweituo':this.props.history.push('/releaseResources/'+params);break; // 投放资源
      
      case 'weituozhaofang':this.props.history.push('/findHouses/'+params);break; // 帮你找房
      
    }    
  }
  render() {
    let{
      categorydata
     } = this.state
    return (    
      <div className="category_wrap">
          {
            categorydata.map((v,i)=>{
              return <dl key={i} onClick={()=>{
                this.goToList(v.param)
              }}>
                        <dt>
                          <i className={v.icons}></i>
                        </dt>
                        <dd>{v.name}</dd>
                    </dl>
            })
          }          
      </div>
    )
  }
}
export default withRouter(Catagory)