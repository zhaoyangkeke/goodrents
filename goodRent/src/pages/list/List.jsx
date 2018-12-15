import React, { Component } from 'react'
import { ListApi } from '../../api'
import searchlist from '../../../mock/mock'
import Header from '../../components/header/header'
import http from '../../utils/http'
import Loading from '../../components/loading/Loading'
import './list.css'
import City from '../../components/city'
// https://m.haozu.com/ajax-search-layer/?domain=bj
// https://m.haozu.com/ajax-search-layer/?domain=bj

export default class List extends Component {
  state = {
    list: [],
    loading: false,
    pageIndex: 1,
    showCity:false,
    pathes:''
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
componentDidMount() {
    let {
        pageIndex
    } = this.state;
    var simplify = localStorage.getItem('simplify') || 'bj' ;
    if (this.props.location.search) {
        clearTimeout(this.timer)
        this.showLoading()
        let keyword = this.props.location.search.split('=')[1];
        ListApi(simplify,'house-list',keyword,pageIndex).then(res=>{
            this.setState({
                list: res.data
            });
            this.timer = setTimeout(() => {
                this.closeLoading();
            }, 1000)
        })
    } else {
        let {
            history:{
                location:{
                    pathname
                }
            }
        } = this.props;
        var paths = pathname.split('/')[2];
        this.setState({
            pathes:paths
        })
        clearTimeout(this.timer)
        this.showLoading()
        ListApi(simplify,paths,'',pageIndex).then(res=>{
            this.setState({
                list: res.data
            });
            this.timer = setTimeout(() => {
                this.closeLoading();
            }, 1000)
        })
    }
}
onScrollPages(e){
    let that = this;
    var simplify = localStorage.getItem('simplify') || 'bj' ;
    let {
        history:{
            location:{
                pathname
            }
        }
    } = this.props;
    var paths = pathname.split('/')[2];
    if (e.target.scrollTop > e.target.scrollHeight - e.target.clientHeight-200){
        clearTimeout(this.timer);
        this.showLoading()
        this.timer = setTimeout(() => {
            this.closeLoading();
            this.setState({
                pageIndex:this.state.pageIndex +=1
            }, () => {
                setTimeout(() => {
                    let { pageIndex, list } = this.state;
                    clearTimeout(this.timer);
                    ListApi(simplify,paths,'', pageIndex).then((res) => { 
                        let {
                            list
                        } = this.state
                        this.setState({
                            list: list.concat(res.data)
                        })
                    }) 
                }, 200);
            })
        }, 100);
    }

}
goToDetail = () => {
    this.props.history.push('/detail')
}
  render() {
    let {
      list,
      loading,
      showCity,
      pathes
    } = this.state;
    return (
      <div className='list'>
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
                list.map((item, index) => {
                    return <dl key={index+pathes} onClick={this.goToDetail}>
                        <dt>
                            <img src={item.thumb_image} alt="" />
                        </dt>
                        <dd>
                            <div className='list-item-tit'>{item.title}</div>
                            <div className='list-item.area'>
                                <span>{item.area}m<sup>2</sup>/</span>
                                <span dangerouslySetInnerHTML={{ __html: item.circle_name }} />
                                <span dangerouslySetInnerHTML={{ __html: item.building_name }} />
                            </div>
                            <div className='distance'>{item.subway_display}</div>
                            <div className='list-item-price'>
                                <span>{item.price}/{item.price_unit}</span>
                                <span>({item.avg_price}<span dangerouslySetInnerHTML={{ __html: item.avg_price_unit }} />)</span>
                            </div>
                            <div className='list-item-tags'>
                                {
                                    item.tags && item.tags.map((it, ind) => {
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
