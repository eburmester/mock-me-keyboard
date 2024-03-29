import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

class MyRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route 
          path='/'
          render={ props => < App />}
        />
      </BrowserRouter>
    )
  }
}

export default MyRouter;