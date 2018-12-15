import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import City from '../../components/city'
import { withRouter } from 'react-router-dom'

class Banner extends Component {
  constructor(props){
    super(props)
    this.state={
      swiperdata:['https://fang-oss.haozu.com/hzfs54/EK/LO/Z8/39138488e7187cf289b513bce72fd695.jpg@750w_500h_90Q_1c_1e_1l','https://fang-oss.haozu.com/hzfs67/FV/13/48/9b8dd74dbc8fb08e925e012568719a38.png@750w_500h_90Q_1c_1e_1'],
      showCityFlag:false,
      city:'北京'
    }
    setTimeout(()=>{
      new Swiper('.swiperTop',{
          autoplay:true,
          loop:true,
          pagination: {
              el: '.swiper-pagination',
          }
      })
    },100)
  }
  componentDidMount(){
      this.setState({
        city: localStorage.getItem('city')
      })     
  }
  showCityList = () =>{
     let {
         city
     } = this.state
     this.setState({
        showCityFlag:true
     })
     localStorage.setItem('city',city)
  }
  goToLogin = () => {
      let {
          history:{
              push
          }
      } = this.props;
      push('/login')
  }
  render() {
    let {
        showCityFlag,
        city
    } = this.state
    return (
        <div className="swiperWrap">
            <div className="swiperTop swiper-container">
                <div className="swiper-wrapper">
                  {
                    this.state.swiperdata.map((v,i)=>{
                      return <div className="swiper-slide" key={i}>
                                <img src={v} className="swiperImg"/>
                            </div>
                    })
                  }                
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="swiperHead">
                <div className="swiperHeadLeft">
                    <img src="https://wap-cdn.haozu.com/static/image/new/logo.png"/>
                    <span className="swiperHeaderCon" onClick={this.showCityList}>
                        {city}
                    </span>
                </div>
                <div className="swiperHeadRight">
                    <i className="icon iconfont icon-dianhua"></i>
                    <span>400-085-2093</span>
                    <i className="icon iconfont icon-geren" onClick={this.goToLogin}></i>
                </div>
            </div>
            <div className="searchWrap">
                <div className="innerSearch" onClick={()=>{
                    let {
                        history:{
                            push
                        }
                    } = this.props;
                    push('/search')
                }}>
                    <span>输入您想要找的区域/商圈或者写字楼名称</span>
                    <i className="icon iconfont icon-sousuo"></i>
                </div>
            </div>
            <City show={showCityFlag} position={'center'}/>
         </div>
    )
  }
}
export default withRouter(Banner)
