import './App.css';
import Main from './components/main/Main'
import React, { Component } from 'react'
import Circle from './components/circle/Circle'
import './components/circle/circle.css'
 class App extends Component {
   state = {
     circles: [
       {id:1, color:'green'},
       {id:2, color:'red'},
       {id:3, color:'yellow'},
       {id:4, color:'blue'}
     ]
   }
  render() {
    const circlesList = this.state.circles.map( c=>{
      return <Circle id = {c.id} color = {c.color} />
    })
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score is:</p>
        <div className = 'circles'>
          {circlesList}
        </div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    )
  }
}
export default App

