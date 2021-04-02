import { Component } from "react";

export default class Header extends Component{

    render(){
        let now = new Date().toLocaleDateString()

        return(
            <header>
                <div>
                    <h1> React Counter App</h1>
                    <p>{now}</p>
                </div>
            </header>
        )
    }
}