//React Functional & Class Component Conditional rendering

import React, { Component } from 'react'

class ClassCom extends Component {
    state={
        city:'Mumbai',
        change: true, 
    }

    changeText = () => {
        this.setState({
        change: !this.state.change
    })
   }
  render(){
    return (
      <div style={{textAlign:"center"}}>
          <h2>Day - 2 Task (React.JS)</h2>
          <h3>This a Class Component</h3>
          {
              this.state.change ? <h1>{this.state.city}</h1>
              : <h1>Delhi</h1>
          }
           <button onClick={this.changeText}>Click Me - To Conditional Render Component</button>
      </div>
    )
  }
}
export default ClassCom;