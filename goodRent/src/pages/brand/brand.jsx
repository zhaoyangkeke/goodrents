import React, { Component } from 'react'
import './brand.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Introduce from '../../components/introduce'
import ChooseOffice from '../../components/chooseOffice'
import More from '../../components/more'
/**
 * introduce 公司详细介绍
 * ChooseOffice 选择写字楼 首页最后
 * **/

class Brand extends Component {
  state={
      brandData:{
          'bj':{
              swiperurl:'https://fang-oss.haozu.com/hzfs60/GN/P2/56/9aac40c3dbb06bf20c7f9cce44a90067.jpg@750w_500h_90Q',
              scrollData:[
                {
                    id:1,
                    url:'https://fang-oss.haozu.com/gjfs21/M0A/2D/FD/CgEHFldRJj-WOonbAA5,y,iaL8k979.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                    tit:'FUNWORK•北京•中骏世界城',
                    di:'朝阳-朝外大街',
                    price:'1000'
                },{
                  id:2,
                  url:'https://fang-oss.haozu.com/cms/index/2018/10/09/5RAYNhfCnk.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                  tit:'霍King共享聚落（红星美凯龙）',
                  di:'朝阳-来广营',
                  price:'1388'
              },{
                  id:3,
                  url:'https://fang-oss.haozu.com/cms/index/2018/05/29/hGTYrmyidF.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                  tit:'Distrii办伴－九龙山外企大厦办公空间',
                  di:'朝阳-大望路',
                  price:'2000'
              },{
                  id:4,
                  url:'https://fang-oss.haozu.com/cms/index/2018/09/18/SQ8QQNptje.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                  tit:'OK Space （远洋国际中心）',
                  di:'朝阳-慈云寺/四惠',
                  price:'800'
              }
            ],
              listdata:[
                {
                    id:11,
                    url:'https://fang-oss.haozu.com/hzfs10/EP/SV/24/0981678094df28c67efc9e8dcd2e4d8e.jpg@216w_126h_90q_1c_1e_1l',
                    name:'国锐广场',
                    total:'共416套房源',
                    des:'写字楼'
                },{
                  id:12,
                  url:'https://fang-oss.haozu.com/hzfs63/KN/RU/25/f3c3a0e489e9bc4937539c078a847a1c.jpg@216w_126h_90q_1c_1e_1l',
                  name:'华润长安中心',
                  total:'共10套房源',
                  des:'普通写字楼'
              },{
                  id:13,
                  url:'https://fang-oss.haozu.com/hzfs10/CG/NP/R6/05e26aa25c3192e5b744166e6077fc07.jpg@216w_126h_90q_1c_1e_1l',
                  name:'氪空间',
                  total:'共175套房源',
                  des:'普通工位/独立办公室'
              },{
                  id:14,
                  url:'https://fang-oss.haozu.com/hzfs64/DG/OY/Z7/6eca398f193b5b284b7a6d153c7c3e11.jpg@216w_126h_90q_1c_1e_1l',
                  name:'瀚海国际大厦',
                  total:'共17套房源',
                  des:'普通工位/超级办公室'
              },{
                  id:15,
                  url:'https://fang-oss.haozu.com/hzfs62/CD/UY/Z5/6dec96662f95dd44833534cbfea46c5d.jpg@216w_126h_90q_1c_1e_1l',
                  name:'纳什空间',
                  total:'共386套房源',
                  des:'普通工位/超级办公室'
              },{
                  id:16,
                  url:'https://fang-oss.haozu.com/hzfs66/GO/12/47/1c38a2e20086b2325e76e3df2c8117cd.jpg@216w_126h_90q_1c_1e_1l',
                  name:'办伴',
                  total:'共56套房源',
                  des:'普通工位/独立办公室'
              },{
                  id:17,
                  url:'https://fang-oss.haozu.com/hzfs26/DJ/KP/57/0b06e0f3033641051a7cc295f736d980.jpg@216w_126h_90q_1c_1e_1l',
                  name:'WE+酷窝',
                  total:'共12套房源',
                  des:'普通工位/独立办公室'
              }
            ]
          },
          'sh':{
            swiperurl:'https://fang-oss.haozu.com/hzfs60/GN/P2/56/9aac40c3dbb06bf20c7f9cce44a90067.jpg@750w_500h_90Q',
            scrollData:[
              {
                  id:1,
                  url:'https://fang-oss.haozu.com/gjfs21/M0A/2D/FD/CgEHFldRJj-WOonbAA5,y,iaL8k979.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                  tit:'FUNWORK•北京•中骏世界城',
                  di:'朝阳-朝外大街',
                  price:'1000'
              },{
                id:2,
                url:'https://fang-oss.haozu.com/cms/index/2018/10/09/5RAYNhfCnk.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                tit:'霍King共享聚落（红星美凯龙）',
                di:'朝阳-来广营',
                price:'1388'
            },{
                id:3,
                url:'https://fang-oss.haozu.com/cms/index/2018/05/29/hGTYrmyidF.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                tit:'Distrii办伴－九龙山外企大厦办公空间',
                di:'朝阳-大望路',
                price:'2000'
            },{
                id:4,
                url:'https://fang-oss.haozu.com/cms/index/2018/09/18/SQ8QQNptje.jpg@316w_166h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
                tit:'OK Space （远洋国际中心）',
                di:'朝阳-慈云寺/四惠',
                price:'800'
            }
          ],
            listdata:[
              {
                  id:11,
                  url:'https://fang-oss.haozu.com/hzfs10/EP/SV/24/0981678094df28c67efc9e8dcd2e4d8e.jpg@216w_126h_90q_1c_1e_1l',
                  name:'国锐广场',
                  total:'共416套房源',
                  des:'写字楼'
              },{
                id:12,
                url:'https://fang-oss.haozu.com/hzfs63/KN/RU/25/f3c3a0e489e9bc4937539c078a847a1c.jpg@216w_126h_90q_1c_1e_1l',
                name:'华润长安中心',
                total:'共10套房源',
                des:'普通写字楼'
            },{
                id:13,
                url:'https://fang-oss.haozu.com/hzfs10/CG/NP/R6/05e26aa25c3192e5b744166e6077fc07.jpg@216w_126h_90q_1c_1e_1l',
                name:'氪空间',
                total:'共175套房源',
                des:'普通工位/独立办公室'
            },{
                id:14,
                url:'https://fang-oss.haozu.com/hzfs64/DG/OY/Z7/6eca398f193b5b284b7a6d153c7c3e11.jpg@216w_126h_90q_1c_1e_1l',
                name:'瀚海国际大厦',
                total:'共17套房源',
                des:'普通工位/超级办公室'
            },{
                id:15,
                url:'https://fang-oss.haozu.com/hzfs62/CD/UY/Z5/6dec96662f95dd44833534cbfea46c5d.jpg@216w_126h_90q_1c_1e_1l',
                name:'纳什空间',
                total:'共386套房源',
                des:'普通工位/超级办公室'
            },{
                id:16,
                url:'https://fang-oss.haozu.com/hzfs66/GO/12/47/1c38a2e20086b2325e76e3df2c8117cd.jpg@216w_126h_90q_1c_1e_1l',
                name:'办伴',
                total:'共56套房源',
                des:'普通工位/独立办公室'
            },{
                id:17,
                url:'https://fang-oss.haozu.com/hzfs26/DJ/KP/57/0b06e0f3033641051a7cc295f736d980.jpg@216w_126h_90q_1c_1e_1l',
                name:'WE+酷窝',
                total:'共12套房源',
                des:'普通工位/独立办公室'
            }
          ]
        }
      },
      brandDataStore:{}
  }
  componentDidMount(){
      new Swiper('.swiper-container')
      let {
          brandData
      } = this.state;
      var simplify = localStorage.getItem('simplify')
      this.setState({
        brandDataStore:brandData[simplify]
      })
  }
  goToHome = () => {
      this.props.history.push('/home')
  }
  render() {
    let {
        brandDataStore
    } = this.state;
    return (
      <div className="brandWrap">
        <div className="brand-swiper-wrap">
            <div className="swiper-container brand-swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={brandDataStore.swiperurl}/>
                    </div>
                </div>
            </div>
            <div className="swiper-title">
                <i className="icon iconfont icon-arrow-left" onClick={this.goToHome}></i>
                <More></More>
            </div>
        </div> 
        <div className="scrollWrap">
            {
                brandDataStore.scrollData && brandDataStore.scrollData.map((v,i)=>{
                    return  <dl key={v.id+i}>
                                <dt>
                                    <img src={v.url}/>
                                </dt>
                                <dd>
                                    <h4>{v.tit}</h4>
                                    <p><b>{v.di}</b><span><strong>{v.price}</strong>元/工位/月</span></p>
                                </dd>
                            </dl>
                })
            }           
        </div>
        <div className="brandList">
            {
                brandDataStore.listdata && brandDataStore.listdata.map((v,i)=>{
                    return <dl key={v.name+i}>
                                <dt>
                                    <img src={v.url}/>
                                </dt>
                                <dd>
                                    <h6>{v.name}</h6>
                                    <p>{v.total}</p>
                                    <p>{v.des}</p>
                                </dd>
                            </dl>
                })
            }
        </div>
        <Introduce></Introduce> 
        <ChooseOffice></ChooseOffice>
      </div>
    )
  }
}
export default Brand
