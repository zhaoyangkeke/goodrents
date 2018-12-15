import React, { Component } from 'react'
import './ReleaseResources.css'
import { DistirctApi,StreetApi } from '../../api'

class ReleaseResources extends Component {
  constructor(props){
      super(props)
      this.state= {
        releaseCityData:[
            {
                id:12,
                name:'北京'
            },{
              id:13,
              name:'上海'
          },{
              id:16,
              name:'广州'
          },{
              id:17,
              name:'深圳'
          },{
              id:45,
              name:'成都'
          },{
              id:194,
              name:'武汉'
          },{
              id:26,
              name:'杭州'
          },{
              id:176,
              name:'西安'
          },{
              id:14,
              name:'天津'
          },{
              id:65,
              name:'南京'
          },{
              id:15,
              name:'重庆'
          },{
              id:56,
              name:'大连'
          }
        ],
        cityValue:"北京",
        districtValue:'选择区域',
        streetValue:'选择街道',
        initCityIndex:0,
        initCityId:12,
        releaseDistrictData:[],
        initDistirctId:174,
        initDistirctIndex:0,
        releaseStreetData:[],
        initStreetIndex:0,
        showCity:false,
        showDistrict:false,
        showStreet:false
    }
  }
  goToHome = () => {
      this.props.history.push('/home')
  }
  toggleCityClass = (index,item) => {
    this.setState({
        initCityIndex:index,
        cityValue:item.name,
        initCityId:item.id,
        showCity:false
    })
    DistirctApi(item.id).then(res=>{
        this.setState({
            releaseDistrictData:res
        })
    })
  }
  toggleDistrictClass = (index,item) => {
    this.setState({
        initDistirctIndex:index,
        districtValue:item.name,
        initDistirctId:item.id,
        showDistrict:false
    })
    StreetApi(item.id).then(res=>{
        this.setState({
            releaseStreetData:res
        })
    })
  }
  toggleStreetClass = (index,item) => {
      this.setState({
        initStreetIndex:index,
        streetValue:item.name,
        showStreet:false
      })
  }
  showCityData = () => {
    this.setState({
        showCity:true
    })
  }
  showDistrictData = () => {
      this.setState({
          showDistrict:true
      })
  }
  showStreetData = () => {
      this.setState({
          showStreet:true
      })
  }
  render() {
    let {
        releaseCityData,
        cityValue,
        districtValue,
        streetValue,
        initCityIndex,
        releaseDistrictData,
        initDistirctIndex,
        releaseStreetData,
        initStreetIndex,
        showDistrict,
        showCity,
        showStreet
    } = this.state;
    return (
      <div className="ReleaseResourcesWrap">
        <div className="ReleaseResourcesWrapHead">
            <i className="icon iconfont icon-arrow-left" onClick={this.goToHome}></i>
            <img src="https://wap-cdn.haozu.com/static/build/image/logo.png" className="releaseImg"/>
        </div>
        <div className="ReleaseResourcesCon">
            <div className="ReleaseFont">
                <h4>委托好租帮你出租</h4>
                <h5>海量客源，帮您快速成交</h5>
            </div>
            <div className="ReleaseMsg">
                <div><input placeholder="姓名(必填)" required/></div>
                <div><input placeholder="手机号码(必填)" required/></div>
                <div className="releaseChoose">
                    {/* 城市 */}
                    <div className="chooseCitys">
                        <input value={cityValue} className="changeReleaseValue" disabled/>
                        <img src="https://wap-cdn.haozu.com/static/build/image/icon_arr_down.png" className="downs" onClick={this.showCityData}/>
                        <ul className={ showCity ? "chooseCityItem show1" : "chooseCityItem"}>
                            {
                                releaseCityData && releaseCityData.map((v,i)=>{
                                    return <li key={v.id} onClick={()=>{
                                        this.toggleCityClass(i,v)
                                    }} className={initCityIndex == i?'active': ''}>{v.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    {/* 区域 */}
                    <div className="chooseCitys">
                        <input value={districtValue} className="changeReleaseValue" disabled/>
                        <img src="https://wap-cdn.haozu.com/static/build/image/icon_arr_down.png" className="downs" onClick={this.showDistrictData}/>
                        <ul className={showDistrict ? "chooseCityItem show2" : "chooseCityItem"}>
                            {
                                releaseDistrictData && releaseDistrictData.map((v,i)=>{
                                    return <li key={i} onClick={()=>{
                                        this.toggleDistrictClass(i,v)
                                    }} className={initDistirctIndex == i?'active': ''}>{v.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    {/* 选择街道 */}
                    <div className="chooseCitys">
                        <input value={streetValue} className="changeReleaseValue" disabled/>
                        <img src="https://wap-cdn.haozu.com/static/build/image/icon_arr_down.png" className="downs" onClick={this.showStreetData}/>
                        <ul className={ showStreet ? "chooseCityItem show2" : "chooseCityItem"}>
                            {
                                releaseStreetData && releaseStreetData.map((v,i)=>{
                                    return <li key={i} onClick={()=>{
                                        this.toggleStreetClass(i,v)
                                    }} className={initStreetIndex == i? 'active' : ''}>{v.name}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div><input placeholder="写字楼名称(必填)" required/></div>
                <div className="releaseBtn">立即投放</div>
            </div>            
        </div>
      </div>
    )
  }
}
export default ReleaseResources
