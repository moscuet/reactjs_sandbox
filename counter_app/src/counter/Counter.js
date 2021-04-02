import { Component } from "react";
import './counter.css'
class Counter extends Component{
    state = {
        score:0
    }

    addOne = () =>this.setState({ score:this.state.score+1})
    
    reSet = () =>this.setState({ score:0})
    
    removeOne = () =>{
        if(this.state.score>0) this.setState({ score:this.state.score-1})
    }

    render(){
        let circleClass = this.state.score ===0 ? '' : this.state.score%2===0? 'even' : 'odd'
        return(
            <div className = "counter_div">
                <div className={`${circleClass} counter_circle`} >
                    <h1>{this.state.score}</h1>
                </div>
                <div className="counter_button">
                    <button className ="add_one" onClick = {this.addOne}>Add One</button>
                    <button className ="remove_one" onClick = {this.removeOne}>Remove One</button>
                    <button className ="reset" onClick = {this.reSet}>Reset</button>
                </div>
                <div className="counter_footer">
                    <p> Developed By Rahman</p>
                </div>
            </div>
        )
    }
}

export default Counter