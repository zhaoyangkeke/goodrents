import React, { Component } from 'react'
import './login.css'

class Login extends Component {
  state={
    telTipFlag:false,
    vertifyTipFlag:false
  }
  goToHome = () => {
    this.props.history.push('/home')
  }
  render() {
    let {
      telTipFlag,
      vertifyTipFlag
    } = this.state;
    return (
      <div className="loginWrap">
        <div className="loginBanner">
          <img src="https://muc-cdn.haozu.com/mucstatic/images/logo_welfare.png" className="loginLogo" onClick={this.goToHome}/>
          <img src="https://muc-cdn.haozu.com/mucstatic/images/banner_03.jpg" className="loginban"/>
        </div>
        <div className="loginContent">
          <h3 className="loginTit">登录丨注册</h3>
          <ul className="loginMessage">
            <li><input placeholder="输入您的手机号"/></li>
            {
              telTipFlag && <p className="telTip"><span>!</span>请输入正确的手机号</p>
            }            
            <li className="li-msg"><input placeholder="短信验证码"/><span className="sendVertifyMsg">发送验证码</span></li>
            {
              vertifyTipFlag && <p className="vertifyTip"><span>!</span>请输入正确的验证码</p>
            }            
          </ul>
          <p className="loginBtn">登 录</p>
        </div>
      </div>
    )
  }
}
export default Login