/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-11-02 16:17:47 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-05 22:47:05
 * @params show(boolean):控制组件显示与隐藏
 * @params position[string]:top bottom center
 * @callback 回调
 */

import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import './maskLayer.css'

function MaskLayer(Inner){
    return class Outer extends Component {
        static defaultProps={
            position:'center',
            show:false,
            callback:null
        }
        static propTypes = {
            show:PropTypes.bool.isRequired
        }
        state={
            positions:{
                    center:'mask-content-center',
                    top:'mask-content-top',
                    bottom:'mask-content-bottom'
            },
            open:false
        }
        componentWillReceiveProps(newProps){
            let {
                show
            } = newProps
            show = typeof show != 'boolean' ? false : show
            this.setState({
                open:show
            })
        }
        closeMaskLayer = () => {
            this.setState({
                open:false
            })
        }
        render() {
            let {
                position,
                show,
                callback
            } = this.props;
            let {
                positions,
                open
            } = this.state
           
            return (
                <Fragment>
                   {
                       open &&  <div className="mask-layer" onClick={this.closeMaskLayer}>
                                    <div className={"mask-content " + positions[position]}>
                                        <Inner callback={callback}></Inner>
                                    </div>
                                </div>
                   }
                </Fragment>
            )
        }
    }
}
export default MaskLayer

