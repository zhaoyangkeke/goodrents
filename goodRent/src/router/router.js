/*
1.home首页
2.列表
3.详情页 
4.search搜索
5.登录
6.我的
7.资讯
8.资讯详情 
*/
import { BrowserRouter,Route,Redirect,Link,Switch } from 'react-router-dom'
import React, { Component } from 'react'


class RouterView extends Component {
    render(){
        let { config } = this.props;
        return <BrowserRouter>
            <Switch>
                {
                  config.routes.map((v,i)=>{
                    return <Route path={v.path} component={v.component} key={v.name}/>
                  })
                }
            </Switch>
        </BrowserRouter>
    }
}
export default RouterView

/**
 * 
 * 
 * render() {
      let {
        config
      } = this.props;
        <BrowserRouter>
          <Switch>     
              {
                config.routes.map((v,i)=>{
                  return <Route path={v.path} component={v.component} key={v.name}/>
                })
              }  
          </Switch>
        </BrowserRouter>
    }
*/