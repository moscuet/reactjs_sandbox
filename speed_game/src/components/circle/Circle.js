import React from 'react'
import './circle.css'
export default function Circle(props) {
    return (
        <div className ={`circle ${props.color}`}>
            <p>{props.id}</p>
        </div>
    )
}
