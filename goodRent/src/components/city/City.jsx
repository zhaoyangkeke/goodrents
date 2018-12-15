import React, { Component } from 'react'
import MaskLayer from '../maskLayer'
import './city.css'
import { connect } from 'react-redux'

class City extends Component {
  state={
    localcity:''
  }
  componentWillUnmount(){
    this.props.callback && this.props.callback('该组件即将被销毁')
  }
  componentDidMount(){
    this.setState({
      localcity:localStorage.getItem('city')
    })
  }
  render() {
    let {
      localcity
    } = this.state;
    let {
      innercitydata
    } = this.props;
    return (
      <div className="cityInnerWrap">
        <h6>选择城市[当前:{localcity}]</h6>
        <ul className="cityInnerCon">
          {
            innercitydata && innercitydata.map((v,i)=>{
              return <li key={i} onClick={(e)=>{
                e.stopPropagation()
                this.setState({
                  localcity:v.name
                })
               localStorage.setItem('city',v.name)
               localStorage.setItem('simplify',v.domain)
               location.reload()
              }}>{v.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
function mapStateToProps (store){
  return {
    innercitydata:store.citydata
  }
}
export default MaskLayer(connect(mapStateToProps)(City))
