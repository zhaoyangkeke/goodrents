import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    let {
        callback
    } = this.props;
    if(!callback){
        console.error('header need callback')
    }
    return (
        <div className='header'>
            <div className='left'>
                <div className='logo' onClick={this.goToHome}>
                    <img src="https://wap-cdn.haozu.com/static/image/new/logo.png" alt=""/>
                </div>
                <div className='address' onClick={callback}>
                    {localStorage.getItem('city')}
                </div>
            </div>
            <div className='right'>
                <i className="iconfont icon-sousuo"></i>
                <i className="iconfont icon-geren"></i>
            </div>
      </div>
    )
  }
}
export default Header
