import React, { Component } from 'react'
import loadingImg from './spinning-circles.svg'
import ML from '../maskLayer'

function Loading(){
    let style = {
        background:'rgba(0,0,0,0.7)',
        width:'150px',
        height:'150px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className="loading" style={style}>
          <img src={loadingImg} alt=""/>
        </div>
    )
}

export default ML(Loading) 
 