import React from 'react'
import './circle.css'
export default function Circle(props) {
    return (
        <div 
            onClick = {()=>props.click()} 
            style ={{backgroundColor:props.color}} 
            className ={`circle`}
            >
            <p>{props.id}</p>
        </div>
    )
}
