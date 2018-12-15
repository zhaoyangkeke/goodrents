import React, { Component } from 'react'
import config from './router/config.js'
import RouterView from './router/router.js'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
         <RouterView config={config}></RouterView>
      </div>
    )
  }
}
export default App
