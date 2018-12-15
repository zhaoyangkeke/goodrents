import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './more.css'

class More extends Component {
  state = {
      showUl:false
  }
  goToLogin = () => {
      this.props.history.push('/login')
  }
  goToSearch = () => {
      this.props.history.push('/search')
  }
  goToList = () => {
      this.props.history.push('/list/house-list')
  }
  goToHome = () => {
      this.props.history.push('/home')
  }
  goToFindHouse = () => {
      this.props.history.push('/findHouses/weituozhaofang')
  }
  render() {
    let {
        showUl 
    } = this.state;
    return (
        <div className="more-com-wrap">            
            {
                showUl && <ul className="more-com-wrap-ul">
                            <li onClick={this.goToLogin}><img src={require("../../static/img/ren.jpg")}/>会员中心</li>
                            <li onClick={this.goToSearch}><img src={require("../../static/img/search.jpg")}/>搜索</li>
                            <li onClick={this.goToList}><img src={require("../../static/img/zu.jpg")}/>写字楼出租</li>
                            <li onClick={this.goToHome}><img src={require("../../static/img/home.jpg")}/>好租首页</li>
                            <li onClick={this.goToFindHouse}><img src={require("../../static/img/hhome.jpg")}/>帮你找房</li>
                        </ul>
            }
            <i className="icon iconfont icon-gengduo" onClick={()=>{
                this.setState({
                    showUl:true
                })
            }}></i>
        </div>        
    )
  }
}
export default withRouter(More)
