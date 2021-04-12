import './App.css';
import Main from './components/main/Main'
import React, { Component } from 'react'
import Circle from './components/circle/Circle'
import './components/circle/circle.css'

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

 class App extends Component {
   state = {
     circles: [
       {id:0, color:'green'},
       {id:1, color:'red'},
       {id:2, color:'yellow'},
       {id:3, color:'blue'},
       {id:4, color:'purple'},
       {id:5, color:'orange'}
     ],
     score:12,
     active:0,
     previousClicked:4,
     active:1
    
   }
timer = undefined  
pace = 1500


   clickHandler = (id) =>{
    this.setState({score:this.state.score+1})
      // this.changeActive(id)
   }
   nextCircle = () => {
     let nextACtive = undefined;
     do {
      nextACtive = getRndInteger(1,6);
     } while (nextACtive === this.state.current);

     this.setState({
       current:nextACtive,
      })
      this.pace *= 0.95
      this.timer = setTimeout(this.nextCircle,this.pace)
      console.log("active circle is ", this.state.current)

   }
  startHandler = () =>{
    this.nextCircle()
  }

  endHandler = () => {
     clearTimeout(this.timer)
  }

  render() {
    const circlesList = this.state.circles.map( c => { 
    return  <Circle 
              key = {c.color}
              click ={()=>this.clickHandler(c.id)}
              id = {c.id} 
              color = {c.color}
            />
    })
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score is: {this.state.score}</p>
        <div className = 'circles'>
          {circlesList}
        </div>
        <button onClick = {this.startHandler}>Start</button>
        <button onClick = {this.endHandler}>Stop</button>
      </div>
    )
  }
}
export default App


//   changeActive(id) {
//     let {previousClicked, active} = this.state
//     if(previousClicked === id) return
//     let newActive = Math.floor(Math.random() *4)
//     newActive !== active ?
//      this.setState({...this.state,active:newActive})
//      :
//      this.changeActive(id) 
// }

