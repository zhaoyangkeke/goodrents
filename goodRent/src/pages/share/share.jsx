import React, { Component } from 'react'
import Loading from '../../components/loading'
import City from '../../components/city'
import Header from '../../components/header/header'
import { ShareApi } from '../../api'
import './share.css'

class Share extends Component {
    state={
        loading: false,
        showCity:false,
        sharelist:[],
        pageIndex:1
    }
    timer = null
    showLoading() {
        this.setState({
            loading: true
        })
    }
    closeLoading() {
        this.setState({
            loading: false
        })
    }
    componentDidMount(){
        // let {
        //     pageIndex
        // } = this.state
        // var simplify = localStorage.getItem('simplify') || 'bj' ;
        // if (this.props.location.search) {
        //     clearTimeout(this.timer)
        //     this.showLoading()
        //     let keyword = this.props.location.search.split('=')[1];
        //     ShareApi(simplify,'house-list',keyword,pageIndex).then(res=>{
        //         console.log('res',res.data)
        //         this.setState({
        //             sharelist: res.data
        //         });
        //         this.timer = setTimeout(() => {
        //             this.closeLoading();
        //         }, 1000)
        //     })
        // }
        // else{
        //     let {
        //         history:{
        //             location:{
        //                 pathname
        //             }
        //         }
        //     } = this.props;
        //     var paths = pathname.split('/')[2];
        //     this.setState({
        //         pathes:paths
        //     })
        //     clearTimeout(this.timer)
        //     this.showLoading()
        //     ShareApi(simplify,paths,'',pageIndex).then(res=>{
        //         this.setState({
        //             sharelist: res.data
        //         });
        //         this.timer = setTimeout(() => {
        //             this.closeLoading();
        //         }, 1000)
        //     })
        // }
        let {
            history:{
                location:{
                    pathname
                }
            }
        } = this.props;

        let {
            pageIndex
        } = this.state

        let paths = pathname.split('/').slice(2).join('/')

        var simplify = localStorage.getItem('simplify') || 'bj' ;
        this.setState({
            pathes:paths
        })
        clearTimeout(this.timer)
        this.showLoading()
        ShareApi(simplify,paths,'',pageIndex).then(res=>{
            this.setState({
                sharelist: res.data
            });
            this.timer = setTimeout(() => {
                this.closeLoading();
            }, 1000)
        })
    }
    onScrollPages = (e) =>{
        let that = this;
        var simplify = localStorage.getItem('simplify') || 'bj' ;
        let {
            history:{
                location:{
                    pathname
                }
            }
        } = this.props;
        var paths = pathname.split('/').slice(2).join('/')
        if (e.target.scrollTop > e.target.scrollHeight - e.target.clientHeight-200){
            clearTimeout(this.timer);
            this.showLoading()
            this.timer = setTimeout(() => {
                this.closeLoading()
                this.setState({
                    pageIndex:this.state.pageIndex +=1
                }, () => {
                    setTimeout(() => {
                        let { pageIndex, list } = this.state;
                        clearTimeout(this.timer);
                        ShareApi(simplify,paths,'', pageIndex).then((res) => { 
                            let {
                                sharelist
                            } = this.state;
                            this.setState({
                                sharelist: sharelist.concat(res.data)
                            })
                        }) 
                    }, 200);
                })
            }, 100);
        }
    }
  render() {
    let {
        loading,
        showCity,
        sharelist,
        pathes
    } = this.state
    return (
      <div className='share-list'>
        <Loading show={loading} />
        <Header callback={()=>{
            this.setState({
                showCity:true
            })
        }}></Header>
        <div className='checkTab'>
            <div>位置</div>
            <div>面积</div>
            <div>价格</div>
            <div>更多</div>
        </div>
        <div className='cont-list' onScroll={(e)=>{
            this.onScrollPages(e)
        }}>
            {
                sharelist.map((item, index) => {
                    return <dl key={index+pathes}>
                        <dt>
                            <img src={item.building_info.thumb_image} alt="" />
                        </dt>
                        <dd>
                            <div className='list-item-tit'>{item.building_info.name}</div>
                            <div className='list-item.area'>
                                <span>{item.building_info.area_min}-{item.building_info.area_max}m<sup>2</sup></span>
                                <p>{item.building_info.district_name+'-'+ item.building_info.street_name}</p>
                            </div>
                            <div className='distance'>{item.building_info.subway_display}</div>
                            <div className='list-item-price'>
                                <span>{item.building_info.price}/{item.building_info.price_unit}</span>
                            </div>
                            <div className='list-item-tags'>
                                {
                                    item.building_info.building_tags && item.building_info.building_tags.map((it, ind) => {
                                        return <span key={ind}>{it}</span>
                                    })
                                }
                            </div>
                        </dd>
                    </dl>
                })
            }
        </div>
        <City show={showCity}></City>
    </div>
    )
  }
}
export default Share
