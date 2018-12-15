import React, { Component } from 'react'
import { SearchApi } from '../../api'
import './search.css'

export default class Search extends Component {
  timer = null
  state = {
      keyWords:'',
      searchResult:[]
  }
  setKeyWords = (e) =>{
    let searchval = e.target.value
    this.setState({
        keyWords:searchval
    })
    clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
      SearchApi(searchval).then(res=>{
        this.setState({
          searchResult:res
        })
      })
    },300)
  }
  goBackHome = () => {
    let {
      history:{
        push
      }
    } = this.props;
    push('/home')
  }
  confimSearch = (e) =>{
    if(e.keyCode == 13){
      clearTimeout(this.timer)
      this.props.history.push(`/list?keyword=${e.target.value}`)
    }
  }
  render() {
    let {
      searchResult
    } = this.state;
    return (
      <div className="searchPageWrap">
          <div className="searchPageHeader">
              <input placeholder="搜索楼盘/商圈" value={this.state.keyWords} onChange={this.setKeyWords} className="ipt" onKeyUp={this.confimSearch}/>
              <span onClick={ this.goBackHome }>取消</span>
          </div>
          <ul className="searchPageContent">
            {
              searchResult && searchResult.map((v,i)=>{
                return <li key={v.id} id={v.id}>{v.name}</li>
              })
            }
          </ul>
      </div>
      
    )
  }
}
