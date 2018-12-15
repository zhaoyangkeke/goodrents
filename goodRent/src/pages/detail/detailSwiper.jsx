import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import More from '../../components/more'
import { withRouter } from 'react-router-dom'

class DetailSwiper extends Component {
  state={
    detailSwiperData:[
        {
            id:1,
            url:"https://fang-oss.haozu.com/brand/index/2018/10/25/MTSbrncFc5.jpg@750w_500h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10"
        },{
            id:2,
            url:"https://fang-oss.haozu.com/brand/index/2018/10/25/YNCBFm5FNz.jpg@750w_500h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10"
        }
    ]
  }
  componentDidMount(){
     new Swiper('.detail-swipers',{
         loop:true,
         autoplay:true
     })
  }
  goToList = () => {
     this.props.history.push('/list/house-list')
  }
  render() {
    let {
        detailSwiperData
    } = this.state;
    return (
        <div className="detail-wrapper-wrap">
            <div className="swiper-container detail-swipers">
                <div className="swiper-wrapper">
                    {
                        detailSwiperData && detailSwiperData.map((v,i)=>{
                            return <div className="swiper-slide" key={i}>
                                        <img src={v.url}/>
                                   </div>
                        })
                    }
                </div>
            </div>
            <div className="detail-swiper-top">
               <i className="icon iconfont icon-arrow-left" onClick={this.goToList}></i>
               <div className="detail-swiper-top-right">
                    <span>❤</span>
                    <More></More>
               </div>
            </div>
        </div>        
    )
  }
}
export default withRouter(DetailSwiper)