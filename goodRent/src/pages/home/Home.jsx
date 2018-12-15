import React, { Component } from 'react'
import Banner from './Banner.jsx'
import Catagory from './Catagory.jsx'
import Information from './Information.jsx'
import TradingArea from './TradingArea.jsx'
import Topline from './Topline'
import Region from './Region'
import HotTopic from './HotTopic'
import FindHouse from './FindHouse'
//import Introduce from './Introduce'
import Introduce from '../../components/introduce'
import ChooseOffice from '../../components/chooseOffice'
import Loading from '../../components/loading'
import http from '../../utils/http'
import './Home.css'
import '../../static/css/reset.css'
import '../../icon/font/iconfont.css'
import { IndexApi,CityApi } from '../../api'
import { connect} from 'react-redux'
import { cityDataAction,listDataAction } from '../../store/actions/index'


/*
  Banner 头部swiper
  Catagory 分类 icon
  Topline 行业头条
  TradingArea 核心商圈
  Region 区域
  HotTopic 热门专题
  FindHouse 马上找房 带搜索
  Information 资讯中心
  Introduce 关于好租信息的介绍
  ChooseOffice 选择写字楼 首页最后
*/

class Home extends Component {
  componentDidMount(){
    this.showLoading()
    // this.props.dispatch({
    //   type:'TEST',
    //   data:CityApi()
    // })
    http.all([IndexApi(),CityApi()]).then(res=>{
      setTimeout(() => {
       this.props.dispatch(cityDataAction(res[1].data))
       this.props.dispatch(listDataAction(res[0].data))
        this.setState({
          loadingFlag:false
        })
      }, 300);
    })
  }
  state={
    loadingFlag:false
  }
  showLoading=()=>{
    this.setState({
      loadingFlag:true
    })
  }
  closeLoading=()=>{
    this.setState({
      loadingFlag:false
    })
  }
  render() {
    let {
      loadingFlag
    } = this.state
    return (
      <div className="homeWrap">
         <Banner/> 
         <Catagory/>
         <Topline/>
         <TradingArea/>
         <Region/>
         <HotTopic/>
         <FindHouse/>
         <Information/>
         <Introduce/>
         <ChooseOffice/>
         <Loading show={loadingFlag}></Loading>
      </div>
    )
  }
}
function mapStateToProps (store){
  return{
    citydata:store.citydata
  }
}
export default connect(mapStateToProps)(Home)
